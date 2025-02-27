import { Link } from '@inertiajs/react';
import {useCart} from '../../../context/CartContext';
import CurrencyContext from '../../../context/CurrencyContext';
import { useState,useContext,useEffect } from "react";
import { Image, Placeholder,Loader} from 'rsuite';

interface MainMenuProps {
    className?: string;
}
  const Cart = ({ className }: MainMenuProps) => {
    const {cart,removeFromCart,totalPrice,handleMinusInCart,handlePlusInCart,saveForLaterInCart,formatCurrency,addCoupon,coupon} = useCart();

    const { currency } = useContext(CurrencyContext);
    const [useCoupon,setUseCoupon] = useState('');
    const [cartTotal,setCartTotal] = useState(totalPrice);
    const [applyCouponLoading,setApplyCouponLoading] = useState(false);
    const [couponApplied,setCouponApplied] = useState(coupon?.coupon_code?true:false);
    const [couponAmount,setCouponAmount] = useState(coupon?.coupon_amount||0);
    const [couponErr,setCouponErr] = useState('');
    const [cartNetTottal,setCartNetTotal] = useState(totalPrice);
    const [shippingAmount,setShippingAmount] = useState(0);
    //const [totalAmount,setTotalAmount] = useState();
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setUseCoupon(value);
    };
    const applyCoupon = async()=>{
        if(useCoupon==''){
            setCouponErr('Please enter a valid coupon code.');
            return false;
        }
        setApplyCouponLoading(true);
        setCouponErr('');
        await fetch('/api/cart/apply-coupon', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ coupon:useCoupon,cartTotalValue:totalPrice}),
        }).then(res=>res.json()).then((result)=>{
           // console.log(result,'result');
            if(result.status=='success'){
                setCouponApplied(true);
                setCouponAmount(result?.couponAmount);
                addCoupon({
                    coupon_code:useCoupon,
                    coupon_amount:result?.couponAmount,
                    shipping:shippingAmount
                })
            }
            if(result.status=='error'){
                setCouponErr(result.message);
                setCouponApplied(false);
                setCouponAmount(0);
                addCoupon({
                    coupon_code:'',
                    coupon_amount:0,
                    shipping:shippingAmount
                })
            }
            setApplyCouponLoading(false);
        }).finally(()=>{
            setApplyCouponLoading(false);
        });
        

    }
    const removeCoupon = ()=>{
            setUseCoupon('');
            setCouponErr('');
            setCouponApplied(false);
            setCouponAmount(0);
            addCoupon({
                coupon_code:'',
                coupon_amount:0,
                shipping:shippingAmount
            })
    }
    const calculateShipping = async()=>{
        const net = (totalPrice-couponAmount)||totalPrice;
        console.log(totalPrice,'cartNetTottal',net)
        await fetch('/api/cart/get-shipping?amount='+net, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        }).then(res=>res.json()).then((result)=>{
            if(result.status=='success'){
                addCoupon({
                    coupon_code:useCoupon,
                    coupon_amount:couponAmount,
                    shipping:result.shipping_charge
                })
                setShippingAmount(result.shipping_charge);
                setCartNetTotal((totalPrice-couponAmount)+result.shipping_charge);
            }
            setApplyCouponLoading(false);
        }).finally(()=>{
            setApplyCouponLoading(false);
        });
    }

    useEffect(()=>{
        if(coupon?.coupon_code){
            console.log(coupon,'coupon');
        }
        // if(coupon?.coupon_code){
        //     setUseCoupon(coupon?.coupon_code);
        //     setCouponAmount(coupon?.coupon_amount);
        //     setCouponApplied(true)
        //    // setShippingAmount()
        // }else{
        //     // addCoupon({
        //     //     coupon_code:useCoupon,
        //     //     coupon_amount:couponAmount,
        //     //     shipping:shippingAmount
        //     // })
        // }
       setCartNetTotal(totalPrice-couponAmount);
       if(totalPrice>0){
            if(useCoupon){
                applyCoupon();
            }
            calculateShipping();
       }
    },[cartTotal,couponAmount,totalPrice,shippingAmount])
    return (
        <>
    <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row g-sm-5 g-3">
                <div className="col-xl-9">
                    <div className="cart-table">
                        <div className="table-responsive-xl">
                        {Object.values(cart).length>0 ? (
                            <table className="table">
                                <tbody>
                                {Object.entries(cart).map(([index,item])=>(
                                    <tr className="product-box-contain" key={'product-'+index}>
                                        <td className="product-detail">
                                            <div className="product border-0">
                                                <Link href={`/product/${item?.product_slug}`}className="product-image">
                                                        {item.product_image?<Image
                                                            width={70}
                                                            className="img-fluid"
                                                            src={item.product_image}
                                                            placeholder={<Placeholder.Graph active />}
                                                            alt={item?.product_name}
                                                            />:<Placeholder.Graph active height={70} />
                                                        }
                                                </Link>
                                                <div className="product-detail">
                                                    <ul>
                                                        <li className="name">
                                                           <Link href={`/product/${item?.product_slug}`}>{item?.product_name}</Link>
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
                                            <h5>{currency} {item?.sale_price} <del className="text-content">{currency} {item?.price}</del></h5>
                                            <h6 className="theme-color">You Save :{currency}{item?.price-item?.sale_price}</h6>
                                        </td>

                                        <td className="quantity">
                                            <h4 className="table-title text-content">Qty</h4>
                                            <div className="quantity-price">
                                                <div className="cart_qty">
                                                    <div className="input-group">
                                                        <button onClick={() => handleMinusInCart(item)} type="button" className="btn qty-left-minus"
                                                            data-type="minus" data-field="">
                                                            <i className="fa fa-minus ms-0" aria-hidden="true"></i>
                                                        </button>
                                                        <input className="form-control input-number qty-input" type="text"  name="quantity" value={item?.quantity} readOnly/>
                                                        <button onClick={() => handlePlusInCart(item)} type="button" className="btn qty-right-plus"
                                                            data-type="plus" data-field="">
                                                            <i className="fa fa-plus ms-0" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="subtotal">
                                            <h4 className="table-title text-content">Total</h4>
                                            <h5>{currency} {item?.total}</h5>
                                        </td>

                                        <td className="save-remove">
                                            <h4 className="table-title text-content">Action</h4>
                                            <button className="save notifi-wishlist" onClick={() => saveForLaterInCart(item)}><i className="fa fa-save"></i></button>
                                            <button className="remove close_button" onClick={() => removeFromCart(item?.product_id)}><i className='fa fa-trash'></i></button>
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

                <div className="col-xl-3">
                    <div className="summery-box p-sticky">
                        <div className="summery-header">
                            <h3>Cart Total</h3>
                        </div>

                        <div className="summery-contain">
                            <div className="coupon-cart">
                                <h6 className="text-content mb-2">Coupon Apply</h6>
                                <div className="mb-3 coupon-box input-group">
                                    <input value={useCoupon} type="email" className="form-control" id="formControlInput" onChange={handleChange} placeholder="Enter Coupon Code Here..." readOnly={couponApplied}/>
                                    {couponApplied?(
                                        <button className="btn-apply" onClick={removeCoupon} disabled={applyCouponLoading}>
                                            {applyCouponLoading?<Loader />:'Remove'}  
                                        </button>
                                    ):(
                                        <button className="btn-apply" onClick={applyCoupon} disabled={applyCouponLoading}>
                                            {applyCouponLoading?<Loader />:'Apply'}  
                                        </button>
                                    )}
                                </div>
                                {couponErr && <p style={{ color: "red" }}>{couponErr}</p>}
                            </div>
                            <ul>
                                <li>
                                    <h4>Subtotal</h4>
                                    <h4 className="price">{formatCurrency(totalPrice)}</h4>
                                </li>
                                <li>
                                    <h4>Coupon Discount</h4>
                                    <h4 className="price">(-) {formatCurrency(couponAmount)}</h4>
                                </li>
                                <li className="align-items-start">
                                    <h4>Shipping*</h4>
                                    <h4 className="price text-end">{formatCurrency(shippingAmount)}</h4>
                                </li>
                            </ul>
                        </div>
                        <ul className="summery-total">
                            <li className="list-total border-top-0">
                                <h4>Total ({currency})</h4>
                                <h4 className="price theme-color">{formatCurrency(cartNetTottal||totalPrice)}</h4>
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
