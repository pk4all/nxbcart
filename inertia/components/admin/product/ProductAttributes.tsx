import { Head,useForm,Link } from '@inertiajs/react';
import { useState,useEffect} from 'react';
import { Input,Rate,Radio, RadioGroup,Checkbox, CheckboxGroup,Uploader } from 'rsuite';
import SelectInput from '../../../components/form/SelectInput';
import 'rsuite/Rate/styles/index.css';
import 'rsuite/Radio/styles/index.css';
import 'rsuite/Uploader/styles/index.css';
import 'rsuite/useToaster/styles/index.css';
import useCsrfToken from "../../../hooks/useCsrfToken";
import { useFormContext} from "react-hook-form";

const ProductAttributes = ({category}:any) => {
    const {
        formState: {errors},
        setValue
    } = useFormContext();
    const csrfToken = useCsrfToken();
   
    const [loading, setLoading] = useState();
    const [attributes, setAttributes] = useState([]);
    
    function handleChange(
        val:any,e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) {
        const { name, value } = e.target;
        setValue('productAttributes.'+[name],val);
        //console.log(name,value,val,'productAttributes');
        
    }
    function handleSelectChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ){
        const { name, value } = e.target;
        setValue('productAttributes.'+[name],value);
        //console.log(name,value,'productAttributes select');
    }
    

    function getAttributes(){
        fetch('/admin/attributes/'+category).then(async(data)=>{
            const d = await data.json()
            setAttributes(d?.attributes);
        });
    }
     useEffect(()=>{
       // console.log(category,'Category in Product Attributes');
        if(category){
            getAttributes();
           //console.log(attributes,'attributes');
        }
    },[category]);
    const onError = (reason:any, file:any) =>{
        let errors = reason.response.errors;
        errors.map((err:any)=>{
            alert(err.error);
        });
    }
    var allFiles: Record<string, any[]> = {};
    const onSuccess = (response:any, file:any) =>{
        let img =response?.data?.images;
        let fieldName=response?.data?.name;
        allFiles[""+fieldName] = allFiles[""+fieldName] || [];     
        allFiles[""+fieldName].push(img);
        setValue('productAttributes.'+[fieldName],allFiles[""+fieldName]);
        console.log(allFiles,fieldName,'upload success');
    }

    if(loading){
        return (<div>Loading...</div>);
    }
    return (
        <>
               <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Product Attributes</h5>
                    </div>
                    { attributes.map((item:any)=>(
                          <div key={item?.slug+'-div'} className="mb-4 row align-items-center">
                          <label className="col-sm-3 col-form-label form-label-title">{item?.name}</label>
                          <div className="col-sm-9">
                            { item.type=='text' && (
                                <Input key={item?.slug} name={item?.slug} className="form-control" placeholder={item?.name} onChange={handleChange}   />
                            )}
                            { item.type=='number' && (
                                <Input key={item?.slug} name={item?.slug} className="form-control" placeholder={item?.name} onChange={handleChange} />
                            )}
                            { item.type=='selectbox' && (
                                <SelectInput 
                                    key={item?.slug}
                                    name={item?.slug}
                                    onChange={handleSelectChange}
                                    options={item?.attributesOptions}
                                />    
                            )}
                            { item.type=='datetime-local' && (
                                <Input key={item?.slug} name={item?.slug} className="form-control" placeholder={item?.name} type={'datetime-local'} onChange={handleChange}  />
                            )}
                            { item.type=='date' && (
                                <Input key={item?.slug} name={item?.slug} className="form-control" placeholder={item?.name} type={'date'} onChange={handleChange}  />
                            )}
                            { item.type=='rating' && (
                                <Rate key={item?.slug}
                                    name={item?.slug}
                                    defaultValue={3} 
                                    allowHalf 
                                    onChange={(val)=>{
                                        setValue('productAttributes.'+item?.slug,val);
                                        //console.log(item?.slug,val,'rating');
                                    }}
                                />
                            )}
                            { item.type=='radio' && (
                                <RadioGroup key={item?.slug} name={item?.slug} inline
                                    onChange={value => {
                                        setValue('productAttributes.'+item?.slug,value);
                                    }}
                                >
                                    {
                                        item?.attributesOptions.map((elm:any)=>(
                                            <Radio key={item?.slug+elm?.value} value={elm.value}>{elm.label}</Radio>
                                        ))
                                    }
                                </RadioGroup>
                            )}
                            { item.type=='checkbox' && (
                                <CheckboxGroup key={item?.slug} name={item?.slug} 
                                    inline
                                    onChange={value => {
                                        setValue('productAttributes.'+item?.slug,value);
                                    }}
                                >
                                    {
                                        item?.attributesOptions.map((elm:any)=>(
                                            <Checkbox key={item?.slug+elm?.value} value={elm.value}>{elm.label}</Checkbox>
                                        ))
                                    }
                                </CheckboxGroup>
                            )}
                            { item.type=='textarea' && (
                                <Input key={item?.slug} name={item?.slug} as="textarea" rows={3} placeholder={item?.name} onChange={handleChange} />
                            )}
                            { item.type=='file' && (
                                <Uploader
                                    multiple={true}
                                    data={
                                        {name:item?.slug}
                                    }
                                    key={item?.slug}
                                    name='files'
                                    listType="picture" 
                                    action='/admin/product/attribute/file-upload'
                                    headers={
                                        {"X-CSRF-TOKEN": csrfToken}
                                    }
                                    onError={onError}
                                    onSuccess={onSuccess}
                                >
                                    <button>
                                        <i className='fa fa-file'></i>
                                    </button>
                                </Uploader>
                            )}
                          </div>
                      </div>
                    ))}
                    <Link href="/admin/add-new-attributes" className="add-option">
                        <i className="ri-add-line me-2"></i>
                        Add Another Option
                    </Link>
                </div>
            </div>
        </>
    );
  };

  export default ProductAttributes;