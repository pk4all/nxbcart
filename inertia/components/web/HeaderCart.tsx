import { Link } from "@inertiajs/react";
import { useState,useContext } from "react";
import { Image, Placeholder,Text} from 'rsuite';
import {useCart} from '../../context/CartContext';
import CurrencyContext from '../../context/CurrencyContext';
const HeaderCart = () => {
    const {cart,removeFromCart,totalPrice} = useCart();
    const { currency } = useContext(CurrencyContext);
    //console.log(cart,'cart value');
    return (
        <>
            <li className="onhover-dropdown">
                                        <Link href="/cart" className="header-icon bag-icon">
                                            <small className="badge-number">{Object.keys(cart)?.length||0}</small>
                                            <i className="iconly-Bag-2 icli"></i>
                                        </Link>
                                        <div className="onhover-div">
                                        {Object.values(cart).length>0 ? (
                                            <>
                                                <ul className="cart-list">
                                                {Object.entries(cart).map(([index,item])=>(
                                                    <li key={'header-cart-'+index}>
                                                    <div className="drop-cart">
                                                    {item.productImages[0]?.thum_url?<Image
                                                            width={70}
                                                            className="drop-image"
                                                            src={item.productImages[0]?.thum_url}
                                                            placeholder={<Placeholder.Graph active />}
                                                            alt={item?.name}
                                                            />:<Placeholder.Graph active height={70} />
                                                        }

                                                        <div className="drop-contain">
                                                            <a href="product-left.html">
                                                                <h5>{item?.name}</h5>
                                                            </a>
                                                    <h6><span>{item?.quantity} x</span>{currency} {item?.productPrice?.sale_price}</h6>
                                                            <button onClick={() => removeFromCart(item?.id)} type="button"  className="close-button">
                                                                <i className="fa-solid fa-xmark"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                ))}
                                                </ul>
                                                <div className="price-box">
                                                    <h5>Total Price :</h5>
                                                    <h4 className="theme-color fw-bold">{currency}{totalPrice}</h4>
                                                </div>
                                                <div className="button-group">
                                                    <Link href="/cart" className="btn btn-sm art-button">View Cart</Link>
                                                    <Link href="/checkout" className="btn btn-sm cart-button theme-bg-color text-white">Checkout</Link>
                                                </div>
                                            </>
                                        ):(
                                           <Text>Cart is Empty</Text>
                                        )}
                                        </div>
                                    </li>
        </>
    );
  };

  export default HeaderCart;
