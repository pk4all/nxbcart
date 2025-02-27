import { Head } from '@inertiajs/react'
import WebLayout from '../../layouts/webLayout';
import CartHeader from '../../components/web/cart/CartHeader';
import ServiceSection from '../../components/web/ServiceSection';
import {useCart} from '../../context/CartContext';
import { useState,useEffect } from "react";
import { Image, Placeholder,Loader} from 'rsuite';
import Address from '../../components/web/checkout/Address';
function CheckoutPage() {
  const {cart,formatCurrency,coupon,totalPrice,shipping,payableAmount} = useCart();

  useEffect(() => {
  
   
  }, []);
  return (
    <>
      <Head title="Checkout Page" />
      <CartHeader title='Checkout' />
      <section className="checkout-section-2 section-b-space">
        <div className="container-fluid-lg">
            <div className="row g-sm-4 g-3">
            <div className="col-lg-8">
                    <div className="left-sidebar-checkout">
                        <div className="checkout-detail-box">
                            <ul>
                                <li>
                                    <div className="checkout-icon">
                                      <i className='fa fa-shopping-cart lord-icon-color'></i>                                       
                                    </div>
                                    <div className="checkout-box">
                                        <Address />
                                    </div>
                                </li>
                                <li>
                                    <div className="checkout-icon">
                                      <i className="fa fa-money lord-icon-color"></i>
                                    </div>
                                    <div className="checkout-box">
                                        <div className="checkout-title">
                                            <h4>Payment</h4>
                                        </div>

                                        <div className="checkout-detail">
                                            <div className="accordion accordion-flush custom-accordion"
                                                id="">
                                                {/* <div className="accordion-item">
                                                    <div className="accordion-header" id="flush-headingFour">
                                                        <div className="accordion-button collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseFour">
                                                            <div className="custom-form-check form-check mb-0">
                                                                <label className="form-check-label" htmlFor="cash"><input
                                                                        className="form-check-input mt-0" type="radio"
                                                                        name="flexRadioDefault" id="cash" checked /> Cash
                                                                    On Delivery</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="flush-collapseFour"
                                                        className="accordion-collapse show"
                                                        data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <p className="cod-review">Pay digitally with SMS Pay
                                                                Link. Cash may not be accepted in COVID restricted
                                                                areas. <a href="javascript:void(0)">Know more.</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> */}

                                                <div className="accordion-item">
                                                    <div className="accordion-header">
                                                        <div className="button">
                                                            <div className="custom-form-check form-check mb-0 center-both">
                                                            <button className="btn theme-bg-color text-white btn-md mb-4 mt-4 fw-bold">Pay {formatCurrency(payableAmount)}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

              <div className="col-lg-4">
                    <div className="right-side-summery-box">
                        <div className="summery-box-2">
                            <div className="summery-header">
                                <h3>Order Summery</h3>
                            </div>
                            {Object.values(cart).length>0 ? (
                              <ul className="summery-contain">
                                {Object.entries(cart).map(([index,item])=>(
                                <li key={'cart-item'+index}>
                                    {item.product_image?<Image
                                        width={70}
                                        className="img-fluid checkout-image"
                                        src={item.product_image}
                                        placeholder={<Placeholder.Graph active />}
                                        alt={item?.product_name}
                                        />:<Placeholder.Graph active height={70} />
                                    }
                                    <h4>{item?.product_name} <span>X {item?.quantity}</span></h4>
                                    <h4 className="price">{formatCurrency(item?.total)}</h4>
                                </li>
                                 ))}
                             </ul>
                            ):(
                              <>Cart is Empty</>
                            )}
                            <ul className="summery-total">
                                <li>
                                    <h4>Subtotal</h4>
                                    <h4 className="price">{formatCurrency(totalPrice)}</h4>
                                </li>
                                <li>
                                    <h4>Coupon/Code</h4>
                                    <h4 className="price">-{formatCurrency(coupon?.coupon_amount||0)}</h4>
                                </li>

                                <li>
                                    <h4>Shipping</h4>
                                    <h4 className="price">{formatCurrency(shipping)}</h4>
                                </li>
                                {/* <li>
                                    <h4>Tax</h4>
                                    <h4 className="price"></h4>
                                </li> */}
                                <li className="list-total">
                                    <h4>Total</h4>
                    <h4 className="price">{formatCurrency((totalPrice+shipping)-(coupon?.coupon_amount||0))}</h4>
                                </li>
                            </ul>
                        </div>

                        <div className="checkout-offer">
                            <div className="offer-title">
                                <div className="offer-icon">
                                    <img src="/svg/offer.svg" className="img-fluid" alt="" />
                                </div>
                                <div className="offer-name">
                                    <h6>Available Offers</h6>
                                </div>
                            </div>

                            <ul className="offer-detail">
                                <li>
                                    <p>Combo: BB Royal Almond/Badam Californian, Extra Bold 100 gm...</p>
                                </li>
                                <li>
                                    <p>combo: Royal Cashew Californian, Extra Bold 100 gm + BB Royal Honey 500 gm</p>
                                </li>
                            </ul>
                        </div>

                        <button className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold">Place Order</button>
                    </div>
              </div>
            </div>
          </div>
      </section>  
      <ServiceSection />
    </>
  )
}

CheckoutPage.layout = (page: React.ReactNode) => (
  <WebLayout title="NXB Check Page " children={page} />
);

export default CheckoutPage;