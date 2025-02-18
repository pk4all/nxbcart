import { Link } from "@inertiajs/react";
import { Image, Placeholder,Rate} from 'rsuite';
import 'rsuite/Rate/styles/index.css';
import React, { useContext,useState } from 'react';
import CurrencyContext from '../../../context/CurrencyContext';
import {useCart} from '../../../context/CartContext';
const Product = ({product}:any) => {
    const { currency } = useContext(CurrencyContext);
    const [value, setValue] = useState(0);
    const { addToCart,cart,handleMinus,handlePlus,addToWishList} = useCart();
    
    return (
    <>
        <div className="col-lg-3 col-md-4 col-6 wow fadeInUp">
            <div className="product-box-4">
                <div className="product-image">
                    <div className="label-flex">
                        <button type="button" className="btn p-0 wishlist btn-wishlist notifi-wishlist" onClick={() => addToWishList(product)}>
                            <i className="iconly-Heart icli"></i>
                        </button>
                    </div>
                    <Link href={`/product/${product.slug}`}>
                       {product.productImages[0]?.thum_url?<Image
                        className="img-fluid"
                        src={product.productImages[0]?.thum_url}
                        placeholder={<Placeholder.Graph active />}
                        alt={product.name}
                        />:<Placeholder.Graph active height={267} />
                       }
                    </Link>
                    <ul className="option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Detail View">
                            <Link href={`/product/${product.slug}`} data-bs-toggle="modal" data-bs-target="#view">
                                <i className="iconly-Show icli"></i>
                            </Link>
                        </li>
                    </ul>

                </div>

                <div className="product-detail">
                    <Rate className="rating" defaultValue={4.5} allowHalf color="yellow" size="lg" readOnly />
                    <Link href={`/product/${product.slug}`}>
                        <h5 className="name">{product.name}</h5>
                    </Link>
                    <h5 className="price theme-color">{currency}{product.productPrice?.sale_price}<del>{currency}{product.productPrice?.price}</del></h5>
                    <div className="price-qty">
                        <div className="counter-number">
                            <div className="counter">
                                <button type="button" className="qty-left-minus" data-type="minus" data-field="" onClick={() => handleMinus(product)}>
                                    <i className="fa-solid fa-minus"></i>
                                </button>
                                <input className="form-control input-number qty-input" type="text"
                                    name="quantity" value={cart[product?.id]?.quantity||0}  readOnly />
                                <button type="button" className="qty-right-plus" data-type="plus" data-field="" onClick={() => handlePlus(product)}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button type="button" onClick={() => addToCart(product)} className="buy-button buy-button-2 btn btn-cart">
                            <i className="iconly-Buy icli text-white m-0"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
  };

  export default Product;
