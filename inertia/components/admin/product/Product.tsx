import { useFormContext } from "react-hook-form";
const Product = () => {
    const { 
        register,
        formState: { errors },
     } = useFormContext();

    return (
        <>
            <input {...register("productInformation.name")} placeholder="Enter name" className="form-control" />
            {errors.productInformation && <p style={{ color: "red" }}>{errors.productInformation?.name?.message}</p>}
        </>
        
    );
  };

  export default Product;