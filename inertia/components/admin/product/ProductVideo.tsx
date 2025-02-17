import {useForm,usePage } from '@inertiajs/react';
import { Input} from 'rsuite';
import { Inertia } from "@inertiajs/inertia"
import useCsrfToken from "../../../hooks/useCsrfToken";
import { ProductVideoUrl } from '../../../types';
import {useState} from 'react';
const ProductVideo = () => {
    const {product} = usePage<{product:ProductVideoUrl}>().props;

    const [processing, setProcessing] = useState(false)
    const csrfToken = useCsrfToken();
    const { data, setData, errors } = useForm({
        video_url: product?.video_url,
        invalid:''
    });
    const youtubeRegex = /^(https?:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
     function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            setProcessing(true);
            if (!youtubeRegex.test(data.video_url)) {
                setData('invalid', 'Please enter a valid YouTube URL');
                return;
            }

            setData('invalid', '');
            Inertia.post('/admin/product/update-video-url/'+product?.id,data,
              {
                  preserveScroll: true,
                  headers: {
                      "X-CSRF-TOKEN": csrfToken,
                  },
                  onError: (error:any) => {
                      console.log("Validation Errors:", error);
                      setProcessing(false);
                  },
                  onSuccess: (res) => {
                    console.log(res,'res')
                    setProcessing(false)

                  },
                  onFinish: () => {
                    setProcessing(false)
                  },
              }
            );
        }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Product Videos </h5>
                    </div>
                    <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit} >
                        <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0">
                                Video Link (Youtube Link) <span>*</span>
                            </label>
                            <div className="col-sm-9">
                            <Input name="video_url" className="form-control" type="text" value={data.video_url} onChange={(value,e) => {setData('video_url',e.target.value)}} placeholder="Video Link" required  />
                            {errors.video_url && <p style={{ color: "red" }}>{errors.video_url}</p>}
                            {data.invalid && <p style={{ color: "red" }}>{data.invalid}</p>}
                            </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                            <div className="col-sm-3 form-label-title">
                                <button className="flex items-center focus:outline-none btn-indigo btn btn-animation w-30" type="submit" disabled={processing}>
                                    {processing ? 'Updating...' : 'Save'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
  };

  export default ProductVideo;