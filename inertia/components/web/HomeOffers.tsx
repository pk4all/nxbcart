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

const HomeOffers = () => {
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
        return <div className="category-section-2">
                <div className="container-fluid-lg">
                    <Placeholder.Grid rows={4} columns={4} active />
                </div>
            </div>;
    }
    return (     
     <>
         <section>
        <div className="container-fluid-lg">
            <div className="title">
                <h2>Best Offers</h2>
            </div>
            <div className="row">
                <div className="col-12">

                    <div className="three-slider arrow-slider ratio_65">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}  // Space between slides
                            slidesPerView={3}   // Show 3 slides at a time
                            navigation={false}         // Show next/prev arrows
                            pagination={false} // Show dots { clickable: false }
                            autoplay={{ delay: 2500 }} // Auto slide every 2.5s
                            loop={true} // Infinite loop
                        >
                            <SwiperSlide>
                                <div>
                                    <div className="offer-banner hover-effect">
                                        <img src="/images/veg-3/value/1.png" className="img-fluid bg-img" alt="" />
                                        <div className="banner-detail">
                                            <h5 className="theme-color">Buy more, Save more</h5>
                                            <h6>Fresh Vegetable</h6>
                                        </div>
                                        <div className="offer-box">
                                            <button className="btn-category btn theme-bg-color text-white">View Offer</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="offer-banner hover-effect">
                                        <img src="/images/veg-3/value/2.png" className="img-fluid bg-img" alt=""/>
                                        <div className="banner-detail">
                                            <h5 className="theme-color">Save More!</h5>
                                            <h6>Organic Vegetable</h6>
                                        </div>
                                        <div className="offer-box">
                                            <button className="btn-category btn theme-bg-color text-white">View Offer</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="offer-banner hover-effect">
                                        <img src="/images/veg-3/value/3.png" className="img-fluid bg-img"
                                            alt=""/>
                                        <div className="banner-detail">
                                            <h5 className="theme-color">Hot Deals!</h5>
                                            <h6>Fruita & Vagerables</h6>
                                        </div>
                                        <div className="offer-box">
                                            <button className="btn-category btn theme-bg-color text-white">View Offer</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="offer-banner hover-effect">
                                        <img src="/images/veg-3/value/1.png" className="img-fluid bg-img"
                                            alt="" />
                                        <div className="banner-detail">
                                            <h5 className="theme-color">Buy more, Save more</h5>
                                            <h6>Fruita & Vagerables</h6>
                                        </div>
                                        <div className="offer-box">
                                            <button  className="btn-category btn theme-bg-color text-white">View
                                                Offer</button>
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

  export default HomeOffers;
