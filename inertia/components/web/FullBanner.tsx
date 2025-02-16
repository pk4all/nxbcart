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

const FullBanner = () => {
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
            <div className="row">
                <div className="col-12">
                    <div className="banner-contain-3 section-b-space section-t-space hover-effect">
                        <img src="/images/veg-3/banner/3.png" className="img-fluid bg-img" alt="" />
                        <div className="banner-detail p-center text-dark text-center p-0">
                            <div>
                                <h4 className="ls-expanded text-uppercase theme-color">Try Our New</h4>
                                <h2 className="my-3">100% Organic Best Quality Best Price</h2>
                                <h4 className="text-content fw-300">Best Fastkart Food Quality</h4>
                                <button className="btn theme-bg-color mt-sm-4 btn-md mx-auto text-white fw-bold"
                                    >Shop Now</button>
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

  export default FullBanner;
