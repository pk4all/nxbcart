import { Link } from "@inertiajs/react";
import { useState,useContext } from "react";
import { Image, Placeholder,Text} from 'rsuite';
import {useCart} from '../../context/CartContext';
import CurrencyContext from '../../context/CurrencyContext';
const HeaderCart = () => {
    const {cart,removeFromCart,totalPrice,totalQuantity} = useCart();
    const { currency } = useContext(CurrencyContext);
    //console.log(cart,'cart value');
    return (
        <>
            <li className="onhover-dropdown">
                                        <Link href="/cart" className="header-icon bag-icon">
                                            <small className="badge-number">{totalQuantity||0}</small>
                                            <i className="iconly-Bag-2 icli"></i>
                                        </Link>
                                        <div className="onhover-div">
                                        {Object.values(cart).length>0 ? (
                                            <>
                                                <ul className="cart-list">
                                                {Object.entries(cart).map(([index,item])=>(
                                                    <li key={'header-cart-'+index}>
                                                    <div className="drop-cart">
                                                    {item.product_image?<Image
                                                            width={70}
                                                            className="drop-image"
                                                            src={item.product_image}
                                                            placeholder={<Placeholder.Graph active />}
                                                            alt={item?.product_name}
                                                            />:<Placeholder.Graph active height={70} />
                                                        }

                                                        <div className="drop-contain">
                                                            <Link href={'/product/'+item?.product_slug}>
                                                                <h5>{item?.product_name}</h5>
                                                            </Link>
                                                    <h6><span>{item?.quantity} x</span>{currency} {item?.sale_price}</h6>
                                                            <button onClick={() => removeFromCart(item?.product_id)} type="button"  className="close-button">
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
