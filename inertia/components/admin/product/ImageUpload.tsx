import { Uploader, Text } from 'rsuite'
// import { Trash } from '@rsuite/icons'
import 'rsuite/Uploader/styles/index.css';
import {usePage } from '@inertiajs/react';
import useCsrfToken from "../../../hooks/useCsrfToken";
import { Product } from '../../../types';
import React, { useState } from "react";
import 'rsuite/Text/styles/index.css';
const ImageUpload = () => {
    const {product} = usePage<{product:Product}>().props||{};
    const [defaultIndex,setDefaultIndex]=useState()
    const csrfToken = useCsrfToken();
    const pi:any = product?.productImages.map((img:any)=>{
        return {
            name: img?.name,
            fileKey: img?.id,
            url:img?.thum_url,
            default:img?.is_default,
        }
    });
    // console.log(pi);
    const onError = (reason:any) =>{
        let errors = reason.response.errors;
        if(reason.response?.type=='error'){
            alert(errors);
        }else{
            errors.map((err:any)=>{
                alert(err.error);
            });
        }
    }
    const onSuccess = (response:any) =>{

       // alert(response?.message);
    }
    const onRemove=(file:any)=>{
        if(file){
            fetch('/admin/product/remove-product-image', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  "X-CSRF-TOKEN": csrfToken
                },
                body: JSON.stringify(file),
              })
              .then((data)=>data.json())
              .then((res)=>{
                console.log(res,'res');
              });
        }
    }
    const setDefault= (file:any)=>{
        fetch('/admin/product/set-default-product-image', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "X-CSRF-TOKEN": csrfToken
            },
            body: JSON.stringify(file),
          })
          .then((data)=>data.json())
          .then((res)=>{
            console.log(res,'res',file.fileKey);
            setDefaultIndex(file.fileKey)
          })
    }
    const renderThumbnail = (file:any) => {
        // if(file.default){
        //   //  setDefaultIndex(file.fileKey)
        // }
        return (
          <div 
            className={file.default||(defaultIndex==file.fileKey)?'default-image inline-block':"inline-block"} 
            onClick={() => setDefault(file)}>
            <img
              src={file?.url}
              alt={file.name}
              style={{objectFit:'cover'}}
            />
          </div>
        )
      }
    return (
        <>
             <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Upload Product Images</h5>
                    </div>
                        <div className="mb-4 row align-items-center">
                            <label
                                className="col-sm-3 col-form-label form-label-title">Images</label>
                            <div className="col-sm-9">
                            <Uploader
                                    multiple={true}
                                    defaultFileList={pi}
                                    data={
                                        {id:product?.id}
                                    }
                                    key={'image-upload'}
                                    name='files'
                                    listType="picture" 
                                    action={'/admin/product/upload-images/'+product?.id}
                                    headers={
                                        {"X-CSRF-TOKEN": csrfToken}
                                    }
                                    onError={onError}
                                    onSuccess={onSuccess}
                                    onRemove={onRemove}
                                    renderThumbnail={renderThumbnail}
                                >
                                    <button>
                                        <i className='fa fa-image'></i>
                                    </button>
                                </Uploader>
                            </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                            <div className="col-sm-9">
                                <Text color="orange">Click on image for select a Featured/Default image.</Text>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
  };
export default ImageUpload;