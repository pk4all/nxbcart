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

const HomeProducts = () => {
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
         <section className="product-section">
        <div className="container-fluid-lg">
            <div className="title title-flex-2">
                <h2>Our Products</h2>
                <ul className="nav nav-tabs tab-style-color-2 tab-style-color" id="myTab">
                    <li className="nav-item">
                        <button className="nav-link btn active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all"
                            type="button">All</button>
                    </li>

                    <li className="nav-item">
                        <button className="nav-link btn" id="cooking-tab" data-bs-toggle="tab" data-bs-target="#cooking"
                            type="button"> Cooking</button>
                    </li>

                    <li className="nav-item">
                        <button className="nav-link btn" id="fruits-tab" data-bs-toggle="tab" data-bs-target="#fruits"
                            type="button">Fruits & Vegetables</button>
                    </li>

                    <li className="nav-item">
                        <button className="nav-link btn" id="beverage-tab" data-bs-toggle="tab" data-bs-target="#beverage"
                            type="button">Beverage</button>
                    </li>

                    <li className="nav-item">
                        <button className="nav-link btn" id="dairy-tab" data-bs-toggle="tab" data-bs-target="#dairy"
                            type="button">Dairy</button>
                    </li>
                </ul>
            </div>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                    <div className="row g-8">
                        <div className="col-lg-3 col-md-4 col-6 wow fadeInUp">
                            <div className="product-box-4">
                                <div className="product-image">
                                    <div className="label-flex">
                                        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i className="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="product-left.html">
                                        <img src="/images/veg-3/cate1/1.png" className="img-fluid" alt="" />
                                    </a>

                                    <ul className="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                <i className="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                            <a href="compare.html">
                                                <i className="iconly-Swap icli"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="product-detail">
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
                                    <a href="product-left.html">
                                        <h5 className="name">Bell pepper</h5>
                                    </a>
                                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                                    <div className="price-qty">
                                        <div className="counter-number">
                                            <div className="counter">
                                                <div className="qty-left-minus" data-type="minus" data-field="">
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                                <input className="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div className="qty-right-plus" data-type="plus" data-field="">
                                                    <i className="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="buy-button buy-button-2 btn btn-cart">
                                            <i className="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.05s">
                            <div className="product-box-4">
                                <div className="product-image">
                                    <div className="label-flex">
                                        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i className="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="product-left.html">
                                        <img src="/images/veg-3/cate1/3.png" className="img-fluid" alt="" />
                                    </a>

                                    <ul className="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                <i className="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                            <a href="compare.html">
                                                <i className="iconly-Swap icli"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="product-detail">
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
                                    <a href="product-left.html">
                                        <h5 className="name">Potato</h5>
                                    </a>
                                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                                    <div className="price-qty">
                                        <div className="counter-number">
                                            <div className="counter">
                                                <div className="qty-left-minus" data-type="minus" data-field="">
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                                <input className="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div className="qty-right-plus" data-type="plus" data-field="">
                                                    <i className="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="buy-button buy-button-2 btn btn-cart">
                                            <i className="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-box-4">
                                <div className="product-image">
                                    <div className="label-flex">
                                        <div className="discount">
                                            <label>50%</label>
                                        </div>

                                        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i className="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="product-left.html">
                                        <img src="/images/veg-3/cate1/5.png" className="img-fluid" alt="" />
                                    </a>

                                    <ul className="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                <i className="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                            <a href="compare.html">
                                                <i className="iconly-Swap icli"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="product-detail">
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
                                    <a href="product-left.html">
                                        <h5 className="name">Baby Chili</h5>
                                    </a>
                                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                                    <div className="price-qty">
                                        <div className="counter-number">
                                            <div className="counter">
                                                <div className="qty-left-minus" data-type="minus" data-field="">
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                                <input className="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div className="qty-right-plus" data-type="plus" data-field="">
                                                    <i className="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="buy-button buy-button-2 btn btn-cart">
                                            <i className="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.15s">
                            <div className="product-box-4">
                                <div className="product-image">
                                    <div className="label-flex">
                                        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i className="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="product-left.html">
                                        <img src="/images/veg-3/cate1/6.png" className="img-fluid" alt="" />
                                    </a>

                                    <ul className="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                <i className="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                            <a href="compare.html">
                                                <i className="iconly-Swap icli"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="product-detail">
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
                                    <a href="product-left.html">
                                        <h5 className="name">Broccoli</h5>
                                    </a>
                                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                                    <div className="price-qty">
                                        <div className="counter-number">
                                            <div className="counter">
                                                <div className="qty-left-minus" data-type="minus" data-field="">
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                                <input className="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div className="qty-right-plus" data-type="plus" data-field="">
                                                    <i className="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="buy-button buy-button-2 btn btn-cart">
                                            <i className="iconly-Buy icli text-white m-0"></i>
                                        </button>
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

  export default HomeProducts;
