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

const HomeBlogs = () => {
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
        return <div>Loading...</div>;
    }
    return (     
     <>
         <section className="blog-section">
        <div className="container-fluid-lg">
            <div className="title">
                <h2>Blogs</h2>
            </div>

            <div className="slider-3 arrow-slider">
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
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="blog-detail.html">
                                <img src="/images/veg-3/blog/1.jpg" className="img-fluid bg-img" alt=""/>
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>Conversion rate optimization</label>
                            <a href="blog-detail.html">
                                <h2>A Fresh Vegetable online market place a fresh...</h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2021</span>
                                <span>By Emil Kristensen</span>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide><SwiperSlide>
                <div>
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="blog-detail.html">
                                <img src="/images/veg-3/blog/2.jpg" className="img-fluid bg-img" alt=""/>
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>Email Marketing</label>
                            <a href="blog-detail.html">
                                <h2>A Fresh Vegetable online market place a fresh...</h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2021</span>
                                <span>By Emil Kristensen</span>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide><SwiperSlide>
                <div>
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="blog-detail.html">
                                <img src="/images/veg-3/blog/3.jpg" className="img-fluid bg-img" alt=""/>
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>Conversion rate optimization</label>
                            <a href="blog-detail.html">
                                <h2>A Fresh Vegetable online market place a fresh...</h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2021</span>
                                <span>By Emil Kristensen</span>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide><SwiperSlide>
                <div>
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="blog-detail.html">
                                <img src="/images/veg-3/blog/1.jpg" className="img-fluid bg-img" alt=""/>
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>Conversion rate optimization</label>
                            <a href="blog-detail.html">
                                <h2>A Fresh Vegetable online market place a fresh...</h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2021</span>
                                <span>By Emil Kristensen</span>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
     </>
    );
  };

  export default HomeBlogs;
