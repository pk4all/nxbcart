import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
import { Placeholder } from 'rsuite';
import 'rsuite/Placeholder/styles/index.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface Offers {
    id: number;
    name: string;
    slug:string;
    icon:string;
    image:string;
  }

const RelatedProducts = () => {
        const [offers, setOffers] = useState<Offers[]>([]);
        const [loading, setLoading] = useState(true);
    useEffect(() => {
        // fetch("/categories")
        //     .then((response) => response.json())
        //     .then((data) => {setOffers(data);console.log(data,'data')}) 
        //     .catch((err) => console.error("Error fetching data:", err));
            setLoading(false);
      }, []);
    if (loading) {
        return <div className="section">
                <div className="container-fluid-lg">
                    <Placeholder.Grid rows={4} columns={4} active />
                </div>
            </div>;
    }
    return (     
        <>
    <section className="product-list-section section-b-space">
        <div className="container-fluid-lg">
            <div className="title">
                <h2>Related Products</h2>
                <span className="title-leaf">
                   <i className="fa fa-product"></i>
                </span>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="slider-6_1 product-wrapper">
                    <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}  // Space between slides
                            slidesPerView={6}   // Show 3 slides at a time
                            navigation={false}         // Show next/prev arrows
                            pagination={false} // Show dots { clickable: false }
                            autoplay={{ delay: 2500 }} // Auto slide every 2.5s
                            loop={true} // Infinite loop
                        >
                        <SwiperSlide>
                        <div>
                            <div className="product-box-3 wow fadeInUp">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="product-left-2.html">
                                            <img src="/images/dl_1.jpg" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                        <span className="span-name">Cake</span>
                                        <a href="product-left.html">
                                            <h5 className="name">Chocolate Chip Cookies 250 g</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                            </ul>
                                            <span>(5.0)</span>
                                        </div>
                                        <h6 className="unit">500 G</h6>
                                        <h5 className="price"><span className="theme-color">$10.25</span> <del>$12.57</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <div className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </div>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0"/>
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.05s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="product-left.html">
                                            <img src="/images/dl_2.jpg" className="img-fluid" alt="" />
                                        </a>

                                        
                                    </div>
                                </div>
                                <div className="product-footer">
                                    <div className="product-detail">
                                        <span className="span-name">Vegetable</span>
                                        <a href="product-left.html">
                                            <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(4.0)</span>
                                        </div>
                                        <h6 className="unit">250 ml</h6>
                                        <h5 className="price"><span className="theme-color">$08.02</span> <del>$15.15</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <div className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </div>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="product-left.html">
                                            <img src="/images/dl_3.jpeg" className="img-fluid" alt="" />
                                        </a>

                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                        <span className="span-name">Vegetable</span>
                                        <a href="product-left.html">
                                            <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(3.8)</span>
                                        </div>

                                        <h6 className="unit">1 Kg</h6>

                                        <h5 className="price"><span className="theme-color">$12.68</span> <del>$14.69</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <div className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </div>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>    
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
  };

  export default RelatedProducts;
