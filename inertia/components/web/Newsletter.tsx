import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";


const Newsletter = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
      }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (     
     <>
         <section className="newsletter-section-2 section-b-space">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="newsletter-box hover-effect">
                        <img src="/images/veg-3/shape/background.png" className="img-fluid bg-img" alt="" />
                        <div className="row pos-abs">
                            <div className="col-xl-8">
                                <div className="newsletter-detail p-center-left text-white">
                                    <div>
                                        <h2>Subscribe to the newsletter</h2>
                                        <h4>Join our subscribers list to get the latest news, updates and special offers
                                            delivered directly in your inbox.</h4>
                                        <form className="row g-2">
                                            <div className="col-sm-10 col-12">
                                                <div className="newsletter-form">
                                                    <input type="email" className="form-control" id="email"
                                                        placeholder="Enter your email" />
                                                    <button type="submit" className="btn bg-white theme-color btn-md fw-500 submit-button">Subscribe</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 d-xl-block d-none">
                                <div className="shape-box">
                                    <img src="/images/ng.png" alt="" className="img-fluid image-1 w-80" />
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

  export default Newsletter;
