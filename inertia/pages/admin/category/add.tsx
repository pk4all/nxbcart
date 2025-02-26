import { Head,useForm,Link } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia"
import React, { useState, useEffect } from "react";
import AdminLayout from '../../../layouts/adminLayout';
import TextInput from '../../../components/form/TextInput';
import SelectInput from '../../../components/form/SelectInput';
import FileInput from '../../../components/form/FileInput';
import LoadingButton from '../../../components/button/LoadingButton';
import EditorComponent from '../../../components/form/EditorComponent';
import TextBoxInput from '../../../components/form/TextBoxInput';
import { Category } from '../../../types';
import { statusOpt } from '../../../utils';
import useCsrfToken from "../../../hooks/useCsrfToken";
import slugify from "slugify";
function AddPage(){
    const [parentCategories, setParentCategories] = useState([]);
    const csrfToken = useCsrfToken();
    const { data, setData, errors, post, processing } = useForm({
        parent_id:'',
        name: '',
        slug: '',
        image:'',
        icon:'',
        description:'',
        status:'1',
        short_index:'',
        invalid:''
    });
    //let CKEditor, ClassicEditor;
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("slug", data.slug)
        formData.append("description", data.description)
        formData.append("status", data.status)
        formData.append("parent_id", data.parent_id)
        formData.append("short_index", data.short_index)
        formData.append("image", data.image)
        formData.append("icon", data.icon)
        Inertia.post('/admin/category/add',formData,
          {
              preserveScroll: true,
              headers: {
                  "X-CSRF-TOKEN": csrfToken,
              },
              onError: (error:any) => {
                  console.log("Validation Errors:", error);
              },
          }
        );
    }
    
    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pastedText = event.clipboardData.getData("text");
        setData('name',pastedText);
      };

      function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
      }

      function getSortIndex(){
       fetch('/admin/category/max-index').then(async(data)=>{
          const d = await data.json()
          setData('short_index',d?.maxShortIndex);
        });
      }
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
        getSortIndex();
        getParentsCats();
      }, [data.name]);
  return (
    <>
    <Head title="Add Category Information" />
    <div className='page-body'>
      <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-sm-8 m-auto">
                      <div className="card">
                          <div className="card-body">
                              <div className="title-header option-title">
                                  <h5>Category Information</h5>
                                  <Link href="/admin/categories" className="align-items-center btn btn-theme">
                                      <i className="ri-list-check-2"></i>Categories
                                  </Link>
                              </div>

                              <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit} >
                              <div className="mb-4 row align-items-center">
                                      <label className="form-label-title col-sm-3 mb-0">Parent Category</label>
                                      <div className="col-sm-9">
                                            <SelectInput
                                                name="parent_id"
                                                value={data.parent_id}
                                                onChange={handleChange}
                                                options={parentCategories}
                                            />
                                      </div>
                                  </div>
                                  <div className="mb-4 row align-items-center">
                                      <label className="form-label-title col-sm-3 mb-0">Category Name</label>
                                      <div className="col-sm-9">
                                            <TextInput
                                                name="name"
                                                error={errors.name}
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                onPaste={handlePaste}
                                                placeholder="Category Name"
                                                className={'form-control'}
                                                type='text'
                                                required
                                            />
                                      </div>
                                  </div>
                                  <div className="mb-4 row align-items-center">
                                      <label className="form-label-title col-sm-3 mb-0">Category Slug</label>
                                      <div className="col-sm-9">
                                        <TextInput
                                            name="slug"
                                            error={errors.slug}
                                            value={data.slug}
                                            onChange={e => setData('slug', e.target.value)}
                                            placeholder="Category Slug"
                                            className={'form-control'}
                                            type='text'
                                            required
                                        />
                                      </div>
                                  </div>

                                  <div className="mb-4 row align-items-center">
                                      <label className="col-sm-3 col-form-label form-label-title">Category
                                          Image</label>
                                      <div id='dropzone' className="form-group col-sm-9">
                                        <div className="dropdown icon-dropdown">
                                            <FileInput
                                                name="image"
                                                accept="image/*"
                                                error={errors.image}
                                                value={data.image}
                                                onChange={photo => setData('image', photo as unknown as string)}
                                            />
                                        </div>
                                      </div>
                                  </div>

                                  <div className="mb-4 row align-items-center">
                                      <div className="col-sm-3 form-label-title">Category Icon</div>
                                      <div className="col-sm-9">
                                          <div className="dropdown icon-dropdown">
                                            <FileInput
                                                name="icon"
                                                error={errors.icon}
                                                value={data.icon}
                                                onChange={photo => setData('icon', photo as unknown as string)}
                                            />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mb-4 row align-items-center">
                                      <div className="col-sm-3 form-label-title">Category Description</div>
                                      <div className="col-sm-9">
                                        {/* <CKEditor
                                          editor={ClassicEditor}
                                          data={data.description}
                                          onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setData('description',data);
                                          }}
                                        /> */}
                                        {/* <EditorComponent value={data.description} onChange={(description) => setData("description", description)} /> */}
                                        <TextBoxInput 
                                           value={data.description}
                                           error={errors.description}
                                           onChange={e => setData('description', e.target.value)}
                                           placeholder="Category description"
                                           className={'form-control'}
                                        />
                                      </div> 
                                  </div>
                                  <div className="mb-4 row align-items-center">
                                      <div className="col-sm-3 form-label-title">Category Sort Index</div>
                                      <div className="col-sm-9">
                                      <TextInput
                                            name="sort_index"
                                            error={errors.short_index}
                                            value={data.short_index}
                                            onChange={e => setData('short_index', e.target.value)}
                                            placeholder="Category sort index"
                                            className={'form-control'}
                                            type='number'
                                        />
                                      </div>
                                  </div>
                                  <div className="mb-4 row align-items-center">
                                      <div className="col-sm-3 form-label-title">Category Status</div>
                                      <div className="col-sm-9">
                                      <SelectInput
                                            name="status"
                                            value={data.status}
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