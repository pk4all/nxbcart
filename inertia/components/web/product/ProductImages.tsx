import { Link,usePage } from "@inertiajs/react";
import { useState,useEffect } from "react";
import { Placeholder,Image } from 'rsuite';
import 'rsuite/Placeholder/styles/index.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductImages = () => {
        const [loading, setLoading] = useState(true);
        const { productImages } = usePage<any>().props?.product;
        const [mainImg,setMainImg]=useState(productImages[0].thum_url);
        const changeImage=(img:any)=>{
           // console.log(img,"img");
            setMainImg(img?.thum_url);
        }

        useEffect(() => {
            setLoading(false);
           // console.log(productImages,'productImages')
        }, []);
    if (loading) {
        return <Placeholder.Grid rows={4} columns={4} active />;
    }
    return (     
     <>
        <div className="product-left-box">
            <div className="row g-2">
                <div className="col-12">
                    <div className="product-main-1 no-arrow">
                        <div>
                            <div className="slider-image">
                                    {mainImg?
                                        <Image
                                        className="img-fluid"
                                        height={460}
                                        width={460}
                                        src={mainImg}
                                        placeholder={<Placeholder.Graph active />}
                                        alt={"Product Image"}
                                        />:<Placeholder.Graph active height={100} />
                                    }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20} 
                        slidesPerView={4}
                        navigation={true}
                        pagination={false}
                        autoplay={false}
                        loop={false}
                    >
                    <div className="bottom-slider-image left-slider no-arrow slick-top">
                        {Object.keys(productImages).length>0 &&  productImages.map((img:any)=>(
                                <SwiperSlide key={`${img.id}-img`}>
                                    <div  onClick={()=>changeImage(img)} className={img.thum_url==mainImg?'sidebar-image product-active':'sidebar-image'}> {img.thum_url ? <Image
                                        className="img-fluid"
                                        height={97}
                                        width={97}
                                        src={img.thum_url}
                                        placeholder={<Placeholder.Graph active />}
                                        alt={img.name}
                                       
                                        />:<Placeholder.Graph active height={100} />
                                        }
                                    </div>
                                </SwiperSlide>  
                            )) 
                        }
                    </div>
                    </Swiper>
                </div>
            </div>
        </div>
     </>
    );
  };

  export default ProductImages;
