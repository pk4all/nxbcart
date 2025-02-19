import { Link } from '@inertiajs/react';
import {useCart} from '../../../context/CartContext';
import CurrencyContext from '../../../context/CurrencyContext';
import { useState,useContext } from "react";
import { Image, Placeholder,Text} from 'rsuite';
interface MainMenuProps {
    className?: string;
}
  const Cart = ({ className }: MainMenuProps) => {
    const {cart,removeFromCart,totalPrice,handleMinus,handlePlus,saveForLater} = useCart();
    const { currency } = useContext(CurrencyContext);
    return (
        <>
         <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row g-sm-5 g-3">
                <div className="col-xxl-9">
                    <div className="cart-table">
                        <div className="table-responsive-xl">
                        {Object.values(cart).length>0 ? (
                            <table className="table">
                                <tbody>
                                {Object.entries(cart).map(([index,item])=>(
                                    <tr className="product-box-contain">
                                        <td className="product-detail">
                                            <div className="product border-0">
                                                <Link href={`/product/${item?.slug}`}className="product-image">
                                                        {item.productImages[0]?.thum_url?<Image
                                                            width={70}
                                                            className="img-fluid"
                                                            src={item.productImages[0]?.thum_url}
                                                            placeholder={<Placeholder.Graph active />}
                                                            alt={item?.name}
                                                            />:<Placeholder.Graph active height={70} />
                                                        }
                                                </Link>
                                                <div className="product-detail">
                                                    <ul>
                                                        <li className="name">
                                                           <Link href={`/product/${item?.slug}`}>{item?.name}</Link>
                                                        </li>

                                                        <li className="text-content"><span className="text-title">Sold By:</span> NXB </li>

                                                        <li className="text-content"><span
                                                                className="text-title">Quantity</span> - {item?.quantity}</li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="price">
                                            <h4 className="table-title text-content">Price</h4>
                                            <h5>{currency} {item?.productPrice?.sale_price} <del className="text-content">{currency} {item?.productPrice?.price}</del></h5>
                                            <h6 className="theme-color">You Save :{currency}{item?.productPrice?.price-item?.productPrice?.sale_price}</h6>
                                        </td>

                                        <td className="quantity">
                                            <h4 className="table-title text-content">Qty</h4>
                                            <div className="quantity-price">
                                                <div className="cart_qty">
                                                    <div className="input-group">
                                                        <button onClick={() => handleMinus(item)} type="button" className="btn qty-left-minus"
                                                            data-type="minus" data-field="">
                                                            <i className="fa fa-minus ms-0" aria-hidden="true"></i>
                                                        </button>
                                                        <input className="form-control input-number qty-input" type="text"  name="quantity" value={item?.quantity} readOnly/>
                                                        <button onClick={() => handlePlus(item)} type="button" className="btn qty-right-plus"
                                                            data-type="plus" data-field="">
                                                            <i className="fa fa-plus ms-0" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="subtotal">
                                            <h4 className="table-title text-content">Total</h4>
                                            <h5>{currency} {item?.productPrice?.sale_price*item?.quantity}</h5>
                                        </td>

                                        <td className="save-remove">
                                            <h4 className="table-title text-content">Action</h4>
                                            <button className="save notifi-wishlist" onClick={() => saveForLater(item)}><i className="fa fa-save"></i></button>
                                            <button className="remove close_button" onClick={() => removeFromCart(item?.id)}><i className='fa fa-trash'></i></button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            ):(
                               <>Cart is Empty</>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-xxl-3">
                    <div className="summery-box p-sticky">
                        <div className="summery-header">
                            <h3>Cart Total</h3>
                        </div>

                        <div className="summery-contain">
                            <div className="coupon-cart">
                                <h6 className="text-content mb-2">Coupon Apply</h6>
                                <div className="mb-3 coupon-box input-group">
                                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                        placeholder="Enter Coupon Code Here..." />
                                    <button className="btn-apply">Apply</button>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <h4>Subtotal</h4>
                                    <h4 className="price">{currency}{totalPrice}</h4>
                                </li>

                                <li>
                                    <h4>Coupon Discount</h4>
                                    <h4 className="price">(-) 0.00</h4>
                                </li>

                                <li className="align-items-start">
                                    <h4>Shipping</h4>
                                    <h4 className="price text-end">{currency}6.90</h4>
                                </li>
                            </ul>
                        </div>

                        <ul className="summery-total">
                            <li className="list-total border-top-0">
                                <h4>Total ({currency})</h4>
                                <h4 className="price theme-color">{currency}132.58</h4>
                            </li>
                        </ul>

                        <div className="button-group cart-button">
                            <ul>
                                <li>
                                    <Link href="/checkout"  className="btn btn-animation proceed-btn fw-bold">Process To Checkout</Link>
                                </li>

                                <li>
                                    <Link href="/products" className="btn btn-light shopping-button text-dark"><i className="fa-solid fa-arrow-left-long"></i> Return To Shopping</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
  };

  export default Cart;
