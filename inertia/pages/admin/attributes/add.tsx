import { Head,useForm,Link } from '@inertiajs/react'
import { Inertia } from "@inertiajs/inertia"
import React, { useState, useEffect} from "react";
import AdminLayout from '../../../layouts/adminLayout.js';
import TextInput from '../../../components/form/TextInput.js';
import SelectInput from '../../../components/form/SelectInput.js';
import LoadingButton from '../../../components/button/LoadingButton.js';
import { statusOpt,requiredOpt,inputsType } from '../../../utils.js';
import useCsrfToken from "../../../hooks/useCsrfToken.js";
import slugify from "slugify";
function AddPage(){
    const csrfToken = useCsrfToken();
    const [parentCategories, setParentCategories] = useState([]);
    const { data, setData, errors, post, processing } = useForm({
        name: '',
        slug:'',
        required: 'no',
        type:'',
        options:[],
        status:'active',
        invalid:'',
        category_id:''
    });
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(data,'form data')
       // return false;
       Inertia.post('/admin/attributes/add',data,
          {
              preserveScroll: true,
              headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
              },
              onError: (error:any) => {
                console.log("Validation Errors:", error);
              },
          }
        );
    }

      function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if((name=='type' && value!='checkbox') && (name=='type' && value!='radio') && (name=='type' && value!='selectbox')){
           // console.log(value,name);
            setData((prevData) => ({
                ...prevData,
                options:[]
            }));
        }else{
            const newOptions:any = [];
            newOptions.push("");
            setData((prevData) => ({
                ...prevData,
                options:newOptions
            }));
        }
      }
        const addOption = () => {
            const newOptions:any = [...data.options];
            newOptions.push("");
            setData((prevData) => ({
                ...prevData,
                options: newOptions
            }));
        };
        const removeOption = (optionIndex: number) => {
            const newOptions = [...data.options];
            const updatedOptions = newOptions.filter((_, i) => i !== optionIndex);
            setData((prevData) => ({
                ...prevData,
                options: updatedOptions
            }));
        };
    
    const handleOptionChange = (
        optionIndex: number,
        event: React.ChangeEvent<HTMLInputElement>
        ) => {
        const { value } = event.target;
        const nv:any = data.options;
        nv[optionIndex] = value;
        setData((prevData) => ({
            ...prevData,
            options: data.options
        }));
    };
    function getParentsCats(){
        fetch('/admin/category/all-parents').then(async(data)=>{
           const d = await data.json()
           setParentCategories(d?.categories);
         });
       }

    useEffect(() => {
         const generatedSlug = slugify(data.name, {
                  lower: true,
                  strict: true,
                  trim: true,
                });
                setData('slug',generatedSlug);
                getParentsCats();
      }, [data.name]);
  return (
    <>
    <Head title="Add New Attribut" />
    <div className='page-body'>
      <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-sm-8 m-auto">
                      <div className="card">
                          <div className="card-body">
                              <div className="title-header option-title">
                                  <h5>Attribute Information</h5>
                                  <Link href="/admin/attributes" className="align-items-center btn btn-theme">
                                      <i className="ri-list-check-2"></i>Attributes
                                  </Link>
                              </div>
                              <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit} method='post'>
                                <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Parent Category</label>
                                    <div className="col-sm-9">
                                        <SelectInput
                                            name="category_id"
                                            value={data.category_id}
                                            onChange={handleChange}
                                            options={parentCategories}
                                        />
                                    </div>
                                </div>
                                  <div className="mb-4 row align-items-center">
                                      <label className="form-label-title col-sm-3 mb-0">Attribute Type</label>
                                      <div className="col-sm-9">
                                        <SelectInput
                                              name="type"
                                              value={data.type}
                                              error={errors.type}
                                              onChange={handleChange}
                                              options={inputsType()}
                                              required
                                          />
                                      </div>
                                  </div>
                                  <div className="mb-4 row align-items-center">
                                      <label className="form-label-title col-sm-3 mb-0">Attribute Name</label>
                                      <div className="col-sm-9">
                                            <TextInput
                                                name="name"
                                                error={errors.name}
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                placeholder="Attribute Name"
                                                className={'form-control'}
                                                type='text'
                                                required
                                            />
                                      </div>
                                  </div>
                                {
                                    (data.type=='checkbox' || data.type=='radio'|| data.type=='selectbox') && (
                                        <div className="mb-4 row align-items-center" >
                                            <label className="form-label-title col-sm-3 mb-0">Attribute Options</label>
                                            <div className="col-sm-9">
                                            {data.options.map((option, optionIndex) => (
                                                <div key={optionIndex} className="flex space-x-2 mt-1">
                                                    <div className="align-self-center text-center">
                                                        {optionIndex+1}
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="Option Value"
                                                        value={option}
                                                        onChange={(e) => handleOptionChange(optionIndex, e)}
                                                        className="border p-2 rounded w-full"
                                                        required
                                                    />
                                                    <button type="button" onClick={() => removeOption(optionIndex)} className="text-red-500">
                                                            ❌
                                                    </button>
                                                </div>
                                                ))}
                                                <button type="button" onClick={() => addOption()} className="text-blue-500 mt-2">
                                                 ➕ Add Option
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                                 

                                  <div className="mb-4 row align-items-center">
                                      <label className="form-label-title col-sm-3 mb-0">Attribute Required</label>
                                      <div className="col-sm-9">
                                        <SelectInput
                                              name="required"
                                              value={data.required}
                                              error={errors.required}
                                              onChange={handleChange}
                                              options={requiredOpt()}
                                          />
                                      </div>
                                  </div>
                                  <div className="mb-4 row align-items-center">
                                      <div className="col-sm-3 form-label-title">Attribute Status</div>
                                      <div className="col-sm-9">
                                        <SelectInput
                                            name="status"
                                            value={data.status}
                                            error={errors.status}
                                            onChange={handleChange}
                                            options={statusOpt()}
                                        />
                                      </div>
                                  </div>
                                  <div className="mb-4 row align-items-center">
                                      {errors.invalid && (
                                          <div className='error-alert'>
                                              {errors.invalid}
                                          </div>
                                          
                                      )}
                                  </div>

                                  <div className="mb-4 row align-items-center">
                                    <div className="col-sm-3 form-label-title">
                                        <LoadingButton
                                            loading={processing}
                                            type="submit"
                                            className="btn-indigo btn btn-animation w-30"
                                        >
                                            Save
                                        </LoadingButton>
                                    </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

AddPage.layout = (page: React.ReactNode) => (
  <AdminLayout title="Add Category" children={page} />
);

export default AddPage;