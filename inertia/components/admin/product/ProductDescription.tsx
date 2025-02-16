import { useState} from 'react';
import TextEditor from '../common/Editor';
import { useFormContext} from "react-hook-form";
interface ProductFormData {
    productDescription: {
        description:string,
        additional_info:string
    };
  }
const ProductDescription = () => {
    const {
            formState: {errors},
            setValue
          } = useFormContext<ProductFormData>();
    const [html, setHtml] = useState('');
    const [info, setInfo] = useState('');
    function descriptionOnChange(e:any) {
        setHtml(e.target.value);
        setValue('productDescription.description',e.target.value);
    }
    function infoOnChange(e:any) {
        setInfo(e.target.value);
        setValue('productDescription.additional_info',e.target.value);
    }
    return (
        <>
             <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Description</h5>
                    </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <label className="form-label-title col-sm-3 mb-0">Product Description</label>
                                    <div className="col-sm-9">
                                        <TextEditor value={html} change={descriptionOnChange}  />
                                        {errors.productDescription?.description?.message && (
                                            <p style={{ color: "red" }}>{errors.productDescription?.description?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-5">
                                <div className="row">
                                    <label className="form-label-title col-sm-3 mb-0">Additional Info</label>
                                    <div className="col-sm-9">
                                        <TextEditor value={info} change={infoOnChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
  };

  export default ProductDescription;