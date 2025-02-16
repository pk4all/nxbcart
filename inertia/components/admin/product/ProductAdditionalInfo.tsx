import { Head,useForm,Link } from '@inertiajs/react';
import { useState} from 'react';
import { Input} from 'rsuite';
import { useFormContext} from "react-hook-form";

const ProductAdditionalInfo = () => {
     const {
            register,
            formState: {errors},
            setValue
          } = useFormContext();
    return (
        <>
              <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Product Additional Info</h5>
                    </div>
                        <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0">Warranty Summary</label>
                            <div className="col-sm-9">
                                <input {...register("productInformation.warranty_summary")} className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0">Covered in Warranty</label>
                            <div className="col-sm-9">
                                <input {...register("productInformation.covered_in_warranty")} className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0"> Sales In Package</label>
                            <div className="col-sm-9">
                                <input {...register("productInformation.sales_in_package")} className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0"> Key Features</label>
                            <div className="col-sm-9">
                                <input {...register("productInformation.key_features")} className="form-control" type="text" />
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
  };

  export default ProductAdditionalInfo;