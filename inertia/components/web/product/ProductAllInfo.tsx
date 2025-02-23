import { Link,usePage } from "@inertiajs/react";
import { useState,useEffect,useContext } from "react";
import { Placeholder,Slider,Rate } from 'rsuite';
import 'rsuite/Placeholder/styles/index.css';
import 'rsuite/Slider/styles/index.css';

const ProductAllInfo = () => {
        const [loading, setLoading] = useState(true);
        const { product } = usePage<any>().props;
        const [tabActive,setTabActive] = useState('description');
        const capitalizeEveryWord = (text:string) => {
            return text
              .split(/[\s-]+/)
              .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
          };
        useEffect(() => {
            setLoading(false);
            console.log(product,'product')
        }, []);
    if (loading) {
        return <Placeholder.Grid rows={4} columns={4} active />;
    }
    return (     
     <>
        <div className="product-section-box">
            <ul className="nav nav-tabs custom-nav" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button onClick={()=>{setTabActive('description')}} className={tabActive=='description'?'nav-link active':'nav-link'} id="description-tab" data-bs-toggle="tab"
                        data-bs-target="#description" type="button" role="tab"
                        aria-controls="description" aria-selected="true">Description</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button onClick={()=>{setTabActive('info')}} className={tabActive=='info'?'nav-link active':'nav-link'} id="info-tab" data-bs-toggle="tab"
                        data-bs-target="#info" type="button" role="tab" aria-controls="info"
                        aria-selected="false">Additional info</button>
                </li>

                {/* <li className="nav-item" role="presentation">
                    <button onClick={()=>{setTabActive('care')}} className={tabActive=='care'?'nav-link active':'nav-link'} id="care-tab" data-bs-toggle="tab"
                        data-bs-target="#care" type="button" role="tab" aria-controls="care"
                        aria-selected="false">Care Instuctions</button>
                </li> */}

                <li  className="nav-item" role="presentation">
                    <button onClick={()=>{setTabActive('review')}} className={tabActive=='review'?'nav-link active':'nav-link'} id="review-tab" data-bs-toggle="tab"
                        data-bs-target="#review" type="button" role="tab" aria-controls="review"
                        aria-selected="false">Review</button>
                </li>
            </ul>

            <div className="tab-content custom-tab" id="myTabContent">
                <div className={tabActive=='description'?'tab-pane fade show active':'tab-pane fade'} id="description" role="tabpanel"
                    aria-labelledby="description-tab">
                    <div className="product-description">
                        <div className="description nav-desh" dangerouslySetInnerHTML={{ __html: product?.productDescription?.description }} />
                        <div className="additional_info nav-desh" dangerouslySetInnerHTML={{ __html: product?.productDescription?.additional_info }} />
                    </div>
                </div>

                <div className={tabActive=='info'?'tab-pane fade show active':'tab-pane fade'} id="info" role="tabpanel" aria-labelledby="info-tab">
                    <div className="table-responsive">
                        {
                            product.productAttributes.length>0 && (
                                <table className="table info-table">
                                    <tbody>
                                    {
                                         product.productAttributes.map((info:any)=>(
                                            <tr>
                                            <th>{capitalizeEveryWord(info?.key)}</th>
                                            <td>{info?.value}</td>
                                        </tr>
                                         ))
                                    }
                                    </tbody>
                                </table>
                            )
                        }
                       
                        

                    </div>
                </div>

                {/* <div className={tabActive=='care'?'tab-pane fade show active':'tab-pane fade'} id="care" role="tabpanel" aria-labelledby="care-tab">
                    <div className="information-box">
                        <ul>
                            <li>Store cream cakes in a refrigerator. Fondant cakes should be
                                stored in an air conditioned environment.</li>

                            <li>Slice and serve the cake at room temperature and make sure
                                it is not exposed to heat.</li>

                            <li>Use a serrated knife to cut a fondant cake.</li>

                            <li>Sculptural elements and figurines may contain wire supports
                                or toothpicks or wooden skewers for support.</li>

                            <li>Please check the placement of these items before serving to
                                small children.</li>

                            <li>The cake should be consumed within 24 hours.</li>

                            <li>Enjoy your cake!</li>
                        </ul>
                    </div>
                </div> */}

                <div className={tabActive=='review'?'tab-pane fade show active':'tab-pane fade'} id="review" role="tabpanel" aria-labelledby="review-tab">
                    <div className="review-box">
                        <div className="row g-4">
                            <div className="col-xl-6">
                                <div className="review-title">
                                    <h4 className="fw-500">Customer reviews</h4>
                                </div>

                                <div className="d-flex">
                                    <div className="product-rating">
                                    <Rate className="product-page-rating" defaultValue={4.5} allowHalf color="yellow" size="sm" readOnly />
                                    </div>
                                    <h6 className="ms-3">4.2 Out Of 5</h6>
                                </div>

                                <div className="rating-box">
                                    <ul>
                                        <li>
                                            <div className="rating-list">
                                                <h5>5 Star</h5>
                                                <Slider
                                                    progress
                                                    defaultValue={70}
                                                    readOnly
                                                />
                                            </div>
                                        </li>

                                        <li>
                                            <div className="rating-list">
                                                <h5>4 Star</h5>
                                                <Slider
                                                    progress
                                                    defaultValue={65}
                                                    readOnly
                                                />
                                            </div>
                                        </li>

                                        <li>
                                            <div className="rating-list">
                                                <h5>3 Star</h5>
                                                <Slider
                                                    progress
                                                    defaultValue={40}
                                                    readOnly
                                                />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rating-list">
                                                <h5>2 Star</h5>
                                                <Slider
                                                    progress
                                                    defaultValue={20}
                                                    readOnly
                                                />
                                            </div>
                                        </li>

                                        <li>
                                            <div className="rating-list">
                                                <h5>1 Star</h5>
                                                <Slider
                                                    progress
                                                    defaultValue={15}
                                                    readOnly
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                {/* <div className="review-title">
                                    <h4 className="fw-500">Add a review</h4>
                                </div> */}

                            </div>

                            {/* <div className="col-12">
                                <div className="review-title">
                                    <h4 className="fw-500">Customer questions & answers</h4>
                                </div>

                                <div className="review-people">
                                    <ul className="review-list">
                                        <li>
                                            <div className="people-box">
                                                <div>
                                                    <div className="people-image">
                                                        <img src="/images/1.jpg"
                                                            className="img-fluid blur-up lazyload"
                                                            alt="" />
                                                    </div>
                                                </div>

                                                <div className="people-comment">
                                                    <a className="name"
                                                        href="javascript:void(0)">Tracey</a>
                                                    <div className="date-time">
                                                        <h6 className="text-content">14 Jan, 2022 at
                                                            12.58 AM</h6>

                                                        <div className="product-rating">
                                                            <ul className="rating">
                                                                <li>
                                                                    <i data-feather="star"
                                                                        className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star"
                                                                        className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star"
                                                                        className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star"></i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="reply">
                                                        <p>Icing cookie carrot cake chocolate cake
                                                            sugar plum jelly-o danish. Dragée dragée
                                                            shortbread tootsie roll croissant muffin
                                                            cake I love gummi bears. Candy canes ice
                                                            cream caramels tiramisu marshmallow cake
                                                            shortbread candy canes cookie.<a
                                                                href="javascript:void(0)">Reply</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
                      
     </>
    );
  };

  export default ProductAllInfo;
