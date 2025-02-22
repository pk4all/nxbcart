import { Link,usePage } from "@inertiajs/react";
import { useState,useEffect,useContext } from "react";
import { Placeholder,Rate } from 'rsuite';
import 'rsuite/Placeholder/styles/index.css';
import 'rsuite/Rate/styles/index.css';
import CurrencyContext from '../../../context/CurrencyContext';
import {useCart} from '../../../context/CartContext';
const ProductPrice = () => {
        const [loading, setLoading] = useState(true);
        const { product } = usePage<any>().props;
        const { currency } = useContext(CurrencyContext);
        const { addToCart,cart,handleMinus,handlePlus,addToWishList} = useCart();
        useEffect(() => {
            setLoading(false);
            console.log(product);
        }, []);
    if (loading) {
        return <Placeholder.Grid rows={4} columns={4} active />;
    }
    return (     
     <>
          <div className="right-box-contain">
                                <h6 className="offer-top">
                                    {
                                      (((product?.productPrice?.price-product?.productPrice?.sale_price)/product?.productPrice?.price)*100).toFixed(0)
                                    }
                                   % Off
                                </h6>
                                <h2 className="name">{product?.name}</h2>
                                <div className="price-rating">
                                    <h3 className="theme-color price">{currency}{product?.productPrice?.sale_price} 
                                        <del className="text-content">{currency}{product?.productPrice?.price}</del> 
                                    </h3>
                                    <div className="product-rating custom-rate">
                                    <Rate className="product-page-rating" defaultValue={4.5} allowHalf color="yellow" size="sm" readOnly />
                                        <span className="review">23 Customer Review</span>
                                    </div>
                                </div>
                                <div className="procuct-contain">
                                    <p>{product?.key_features}</p>
                                </div>
                                <div className="note-box product-packege">
                                    <div className="cart_qty qty-box product-qty">
                                        <div className="input-group">
                                            <button onClick={() => handlePlus(product)} type="button" className="qty-right-plus" data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value={cart[product?.id]?.quantity||0}readOnly />
                                            <button onClick={() => handleMinus(product)}  type="button" className="qty-left-minus" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <button onClick={() => addToCart(product)} className="btn  btn-2 theme-bg-color text-white btn-2-animation w-100">Add To Cart</button>
                                </div>

                                <div className="buy-box">
                                    <button onClick={()=>addToWishList(product)}>
                                        <i className="fa fa-heart m-r-2"></i>
                                        <span>Add To Wishlist</span>
                                    </button>
                                    {/* <a href="compare.html">
                                        <i data-feather="shuffle"></i>
                                        <span>Add To Compare</span>
                                    </a> */}
                                </div>

                                <div className="pickup-box">
                                    {/* <div className="product-title">
                                        <h4>Store Information</h4>
                                    </div>

                                    <div className="pickup-detail">
                                        <h4 className="text-content">Lollipop cake chocolate chocolate cake dessert jujubes.
                                            Shortbread sugar plum dessert powder cookie sweet brownie.</h4>
                                    </div> */}

                                    <div className="product-info">
                                        <ul className="product-info-list product-info-list-2">
                                            <li>Category : <span>{product?.category?.name}</span></li>
                                            <li>SKU : <span>{product?.sku}</span></li>
                                            <li>HSN : <span>{product?.HSN||'NA'}</span></li>
                                            <li>Warranty summary : <span>{product?.warranty_summary}</span></li>
                                            <li>Covered in warranty : <span>{product?.covered_in_warranty}</span></li>
                                            <li>Sales in Package : <span>{product?.sales_in_package}</span></li>
                                            <li>Tags : <span>{product?.tags}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
     </>
    );
  };

  export default ProductPrice;
