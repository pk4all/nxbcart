import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
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

const InfoBanners = () => {
    const [offers, setOffers] = useState<Offers[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("/categories")
            .then((response) => response.json())
            .then((data) => {setOffers(data);console.log(data,'data')}) 
            .catch((err) => console.error("Error fetching data:", err));
            setLoading(false);
      }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (     
     <>
        <section className="banner-section">
        <div className="container-fluid-lg">
            <div className="row gy-xl-0 gy-3">
                <div className="col-lg-6">
                    <div className="banner-contain-3 hover-effect">
                        <img src="/images/veg-3/banner/1.png" className="bg-img img-fluid" alt="" />
                        <div
                            className="banner-detail banner-details-dark text-white p-center-left w-50 mend-auto">
                            <div>
                                <h6 className="ls-expanded text-uppercase">Premium</h6>
                                <h3 className="mb-sm-3 mb-1">Fresh Vegetable & Daily Eating</h3>
                                <h4>Get Extra 50% Off</h4>
                                <button className="btn theme-color bg-white btn-md fw-bold mt-sm-3 mt-1 mend-auto">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="banner-contain-3 hover-effect">
                        <img src="/images/veg-3/banner/2.png" className="bg-img img-fluid" alt="" />
                        <div className="banner-detail text-dark p-center-left w-50 mend-auto">
                            <div>
                                <h6 className=" ls-expanded text-uppercase">available</h6>
                                <h3 className="mb-sm-3 mb-1">100% Natural & Healthy Fruits</h3>
                                <h4 className="text-content">Weekend Special</h4>
                                <button className="btn theme-bg-color text-white btn-md fw-bold mt-sm-3 mt-1 mend-auto">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
     </>
    );
  };

  export default InfoBanners;
