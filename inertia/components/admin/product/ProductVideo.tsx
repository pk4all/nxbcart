import { Head,useForm,Link } from '@inertiajs/react';
import { useState} from 'react';
import { Input} from 'rsuite';
const ProductVideo = () => {
    const { data, setData, errors, post, processing } = useForm({
        video_url: '',
        invalid:''
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Product Videos</h5>
                    </div>
                    <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                            Video Link (Youtube Link)
                        </label>
                        <div className="col-sm-9">
                        <Input name="video_url" className="form-control" type="text" value={data.video_url} onChange={(value,e) => {setData('video_url',e.target.value)}} placeholder="Video Link"  />
                            {/* <input className="form-control" type="url" placeholder="Video Link" /> */}
                        </div>
                    </div>
                    <div className="mb-4 row align-items-center">
                        <div className="col-sm-3 form-label-title">
                            <button className="flex items-center focus:outline-none btn-indigo btn btn-animation w-30" type="submit">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  };

  export default ProductVideo;