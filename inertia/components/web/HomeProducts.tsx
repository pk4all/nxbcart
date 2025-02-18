import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
import { Placeholder } from 'rsuite';
import 'rsuite/Placeholder/styles/index.css';
import CategoriesList from "./product/CategoryList";
import Product from "./product/Product";

interface Products {

}

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category,setCategory] = useState(0);
    useEffect(() => {
        if(category){
            setLoading(true);
            fetch(`/api/products?limit=12&category=${category}`)
                .then((response) => response.json())
                .then((data) => {setProducts(data);console.log(data,'product data')}) 
                .catch((err) => console.error("Error fetching data:", err));
        }else{
            setLoading(true);
            fetch("/api/products?limit=12")
                .then((response) => response.json())
                .then((data) => {setProducts(data);console.log(data,'product data')}) 
                .catch((err) => console.error("Error fetching data:", err));
        }
        setLoading(false);
      }, [category]);
    if (loading) {
        return <div className="product-section">
                <div className="container-fluid-lg">
                    <Placeholder.Grid rows={4} columns={4} active />
                </div>
             </div>;
    }
    return (
     <>
         <section className="product-section">
            <div className="container-fluid-lg">
                <div className="title title-flex-2">
                    <h2>Our Products</h2>
                    <CategoriesList category={category} setCategory={setCategory} />
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" aria-labelledby="all-tab">
                        <div className="row g-8">
                        {products.length>0? products.map((product:any)=>(
                            <Product key={product?.slug} product={product}/>
                        )):(
                            <Placeholder.Grid rows={2} columns={4} active /> 
                        )}
                        </div>
                    </div>
                    </div>
            </div>
    </section>
     </>
    );
  };

  export default HomeProducts;
