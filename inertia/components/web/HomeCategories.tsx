import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
import { Placeholder } from 'rsuite';
import 'rsuite/Placeholder/styles/index.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface Category {
    id: number;
    name: string;
    slug:string;
    icon:string;
    image:string;
  }

const HomeCategories = () => {
       const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("/api/categories")
            .then((response) => response.json())
            .then((data) => {setCategories(data);})
            .catch((err) => console.error("Error fetching data:", err));
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
        <section className="category-section-2">
        <div className="container-fluid-lg">
            <div className="title">
                <h2>Shop By Categories</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="category-slider arrow-slider">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}  // Space between slides
                        slidesPerView={6}   // Show 3 slides at a time
                        navigation={false}         // Show next/prev arrows
                        pagination={false} // Show dots { clickable: false }
                        autoplay={{ delay: 2500 }} // Auto slide every 2.5s
                        loop={true} // Infinite loop
                    >
                    {categories.map((category) => (
                            <SwiperSlide key={category.slug}>
                                <div >
                                    <div className="shop-category-box border-0 wow fadeIn">
                                        <a href={category.slug} className="circle-1">
                                            <img src={category.image?category?.image:'/images/category_default_img.png'} className="img-fluid" alt={category?.name} />
                                        </a>
                                        <div className="category-name">
                                            <h6>{category?.name}</h6>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
     </>
    );
  };

  export default HomeCategories;
