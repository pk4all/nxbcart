import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
interface Banner {
    id: number;
    name: string;
    slug:string;
    image:string;
  }

const HomeBanner = () => {
    const [banner, setBanner] = useState<Banner[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("/categories")
            .then((response) => response.json())
            .then((data) => {setBanner(data);console.log(data,'data')}) 
            .catch((err) => console.error("Error fetching Banners:", err));
            setLoading(false);
      }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (     
     <>
          <section className="home-section-2 home-section-small section-b-space">
        <div className="container-fluid-lg">
            <div className="row g-4">
                <div className="col-xl-6 col-md-8">
                    <div className="home-contain h-100">
                        <img src="/images/veg-3/home/1.png" className="img-fluid bg-img" alt="" loading="lazy" />
                        <div className="home-detail home-width p-center-left">
                            <div>
                                <h6 className="ls-expanded theme-color">ORGANIC</h6>
                                <h1 className="fw-bold w-100">100% Fresh</h1>
                                <h3 className="text-content fw-light">Fruit & Vegetables</h3>
                                <p className="d-sm-block d-none">Free shipping on all your order. we deliver you enjoy</p>
                                <button onClick={(e)=>{}} className="btn mt-sm-4 btn-2 theme-bg-color text-white mend-auto btn-2-animation">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-4 ratio_medium d-md-block d-none">
                    <div className="home-contain home-small h-100">
                        <div className="h-100">
                            <img src="/images/veg-3/home/2.png" className="img-fluid bg-img" alt="" loading="lazy"/>
                        </div>
                        <div className="home-detail text-center p-top-center w-100 text-white">
                            <div>
                                <h4 className="fw-bold">Fresh & 100% Organic</h4>
                                <h5 className="text-center">famer's market</h5>
                                <button className="btn bg-white theme-color mt-3 home-button mx-auto btn-2"
                                    onClick={(e)=>{}}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 ratio_65 d-xl-block d-none">
                    <div className="row g-3">
                        <div className="col-xl-12 col-sm-6">
                            <div className="home-contain">
                                <a href="shop-left-sidebar.html">
                                    <img src="/images/veg-3/home/3.png" className="img-fluid bg-img" alt="" loading="lazy" />
                                </a>
                                <div className="home-detail text-white p-center text-center">
                                    <div>
                                        <h4 className="text-center">Organic Lifestyle</h4>
                                        <h5 className="text-center">Best Weekend Sales</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12 col-sm-6">
                            <div className="home-contain">
                                <a href="shop-left-sidebar.html">
                                    <img src="/images/veg-3/home/4.png" className="img-fluid bg-img" alt="" loading="lazy" />
                                </a>
                                <div className="home-detail text-white w-50 p-center-left home-p-sm">
                                    <div>
                                        <h4 className="fw-bold">Safe food saves lives</h4>
                                        <h5>Discount Offer</h5>
                                    </div>
                                </div>
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

  export default HomeBanner;
