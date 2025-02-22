import { Link,usePage } from "@inertiajs/react";
import { useState,useEffect,useContext } from "react";
import { Placeholder,Rate } from 'rsuite';
import 'rsuite/Placeholder/styles/index.css';
const ProductRightBox = () => {
        const [loading, setLoading] = useState(true);
        const { product } = usePage<any>().props;

        useEffect(() => {
            setLoading(false);
        }, []);
    if (loading) {
        return <Placeholder.Grid rows={4} columns={4} active />;
    }
    return (     
     <>
          
                        <div className="pt-25">
                            <div className="category-menu">
                                <h3>Trending Products</h3>

                                <ul className="product-list product-right-sidebar border-0 p-0">
                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image">
                                                <img src="/images/vegetable/product/23.png"
                                                    className="img-fluid" alt="" />
                                            </a>

                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html">
                                                        <h6 className="name">Meatigo Premium Goat Curry</h6>
                                                    </a>
                                                    <span>450 G</span>
                                                    <h6 className="price theme-color">$ 70.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image">
                                                <img src="/images/vegetable/product/24.png"
                                                    className="" alt="" />
                                            </a>

                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html">
                                                        <h6 className="name">Dates Medjoul Premium Imported</h6>
                                                    </a>
                                                    <span>450 G</span>
                                                    <h6 className="price theme-color">$ 40.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image">
                                                <img src="/images/vegetable/product/25.png"
                                                    className="" alt="" />
                                            </a>

                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html">
                                                        <h6 className="name">Good Life Walnut Kernels</h6>
                                                    </a>
                                                    <span>200 G</span>
                                                    <h6 className="price theme-color">$ 52.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                       
                        <div className="ratio_156 pt-25">
                            <div className="home-contain">
                                <img src="/images/vegetable/banner/8.jpg" className="bg-img"
                                    alt="" />
                                <div className="home-detail p-top-left home-p-medium">
                                    <div>
                                        <h6 className="text-yellow home-banner">Seafood</h6>
                                        <h3 className="text-uppercase fw-normal"><span
                                                className="theme-color fw-bold">Freshes</span> Products</h3>
                                        <h3 className="fw-light">every hour</h3>
                                        <button
                                            className="btn btn-animation btn-md fw-bold mend-auto">Shop Now <i
                                                className="fa-solid fa-arrow-right icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>    
     </>
    );
  };

  export default ProductRightBox;
