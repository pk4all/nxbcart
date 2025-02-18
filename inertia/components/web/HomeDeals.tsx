import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface Deals {
    id: number;
    name: string;
    slug:string;
    icon:string;
    image:string;
  }

const HomeDeals = () => {
    const [data, setData] = useState<Deals[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // fetch("/categories")
        //     .then((response) => response.json())
        //     .then((data) => {setData(data);console.log(data,'data')}) 
        //     .catch((err) => console.error("Error fetching data:", err));
            setLoading(false);
      }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (     
     <>
        <section className="deal-section">
        <div className="container-fluid-lg">
            <div className="title">
                <h2>Deal Of The Day</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="three-slider-1 arrow-slider">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}  // Space between slides
                        slidesPerView={2}   // Show 3 slides at a time
                        navigation={false}         // Show next/prev arrows
                        pagination={false} // Show dots { clickable: false }
                        autoplay={{ delay: 2500 }} // Auto slide every 2.5s
                        loop={true} // Infinite loop
                    >
                    <SwiperSlide>
                        <div>
                            <div className="deal-box wow fadeInUp">
                                <a href="shop-left-sidebar.html" className="category-image order-sm-2">
                                    <img src="/images/dl_1.jpg" className="img-fluid"
                                        alt="" />
                                </a>

                                <div className="deal-detail order-sm-1">
                                    <button className="buy-box btn theme-bg-color text-white btn-cart">
                                        <i className="iconly-Buy icli m-0"></i>
                                    </button>
                                    <div className="hot-deal">
                                        <span>Hot Deals</span>
                                    </div>
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
                                    <a href="shop-left-sidebar.html" className="text-title">
                                        <h5>Bell pepper</h5>
                                    </a>
                                    <h5 className="price">$70.21 <span>$65.00</span></h5>
                                    <div className="progress custom-progressbar">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <h4 className="item">Sold: <span>30 Items</span></h4>
                                    <h4 className="offer">Hurry up offer end in</h4>
                                    <div className="timer" id="clockdiv-4" data-hours="1" data-minutes="2" data-seconds="3">
                                        <ul>
                                            <li>
                                                <div className="counter">
                                                    <div className="days">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="hours">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="minutes">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="seconds">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="deal-box wow fadeInUp" data-wow-delay="0.05s">
                                <a href="shop-left-sidebar.html" className="category-image order-sm-2">
                                    <img src="/images/dl_2.jpg" className="img-fluid" alt="" />
                                </a>

                                <div className="deal-detail order-sm-1">
                                    <button className="buy-box btn theme-bg-color text-white btn-cart">
                                        <i className="iconly-Buy icli m-0"></i>
                                    </button>
                                    <div className="hot-deal">
                                        <span>Hot Deals</span>
                                    </div>
                                    <ul className="rating">
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
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="shop-left-sidebar.html" className="text-title">
                                        <h5>Eggplant</h5>
                                    </a>
                                    <h5 className="price">$70.21 <span>$65.00</span></h5>
                                    <div className="progress custom-progressbar">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <h4 className="item">Sold: <span>30 Items</span></h4>
                                    <h4 className="offer">Hurry up offer end in</h4>
                                    <div className="timer" id="clockdiv-1" data-hours="1" data-minutes="2" data-seconds="3">
                                        <ul>
                                            <li>
                                                <div className="counter">
                                                    <div className="days">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="hours">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="minutes">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="seconds">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="deal-box wow fadeInUp" data-wow-delay="0.1s">
                                <a href="shop-left-sidebar.html" className="category-image order-sm-2">
                                    <img src="/images/dl_3.jpeg" className="img-fluid" alt="" />
                                </a>

                                <div className="deal-detail order-sm-1">
                                    <button className="buy-box btn theme-bg-color text-white btn-cart">
                                        <i className="iconly-Buy icli m-0"></i>
                                    </button>
                                    <div className="hot-deal">
                                        <span>Hot Deals</span>
                                    </div>
                                    <ul className="rating">
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
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="shop-left-sidebar.html" className="text-title">
                                        <h5>Onion</h5>
                                    </a>
                                    <h5 className="price">$70.21 <span>$65.00</span></h5>
                                    <div className="progress custom-progressbar">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <h4 className="item">Sold: <span>30 Items</span></h4>
                                    <h4 className="offer">Hurry up offer end in</h4>
                                    <div className="timer" id="clockdiv-2" data-hours="1" data-minutes="2" data-seconds="3">
                                        <ul>
                                            <li>
                                                <div className="counter">
                                                    <div className="days">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="hours">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="minutes">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="seconds">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>    
                    <SwiperSlide>
                        <div>
                            <div className="deal-box wow fadeInUp" data-wow-delay="0.15s">
                                <div className="category-image order-sm-2">
                                    <img src="/images/dl_4.jpeg" className="img-fluid" alt="" />
                                </div>

                                <div className="deal-detail order-sm-1">
                                    <button className="buy-box btn theme-bg-color text-white btn-cart">
                                        <i className="iconly-Buy icli m-0"></i>
                                    </button>
                                    <div className="hot-deal">
                                        <span>Hot Deals</span>
                                    </div>
                                    <ul className="rating">
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
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="shop-left-sidebar.html" className="text-title">
                                        <h5>Bell pepper</h5>
                                    </a>
                                    <h5 className="price">$70.21 <span>$65.00</span></h5>
                                    <div className="progress custom-progressbar">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <h4 className="item">Sold: <span>30 Items</span></h4>
                                    <h4 className="offer">Hurry up offer end in</h4>
                                    <div className="timer" id="clockdiv-3" data-hours="1" data-minutes="2" data-seconds="3">
                                        <ul>
                                            <li>
                                                <div className="counter">
                                                    <div className="days">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="hours">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="minutes">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div className="seconds">
                                                        <h6></h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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

  export default HomeDeals;
