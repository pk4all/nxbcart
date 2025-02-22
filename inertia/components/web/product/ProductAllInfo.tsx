import { Link,usePage } from "@inertiajs/react";
import { useState,useEffect,useContext } from "react";
import { Placeholder,Slider } from 'rsuite';
import 'rsuite/Placeholder/styles/index.css';
import 'rsuite/Slider/styles/index.css';
const ProductAllInfo = () => {

        const [loading, setLoading] = useState(true);
        const { product } = usePage<any>().props;

        useEffect(() => {
            setLoading(false);
        }, []);
    if (loading) {
        return <Placeholder.Grid rows={4} columns={4} active />;
    }
    return (     
     <>
        <div className="product-section-box">
                                <ul className="nav nav-tabs custom-nav" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="description-tab" data-bs-toggle="tab"
                                            data-bs-target="#description" type="button" role="tab"
                                            aria-controls="description" aria-selected="true">Description</button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="info-tab" data-bs-toggle="tab"
                                            data-bs-target="#info" type="button" role="tab" aria-controls="info"
                                            aria-selected="false">Additional info</button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="care-tab" data-bs-toggle="tab"
                                            data-bs-target="#care" type="button" role="tab" aria-controls="care"
                                            aria-selected="false">Care Instuctions</button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="review-tab" data-bs-toggle="tab"
                                            data-bs-target="#review" type="button" role="tab" aria-controls="review"
                                            aria-selected="false">Review</button>
                                    </li>
                                </ul>

                                <div className="tab-content custom-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="description" role="tabpanel"
                                        aria-labelledby="description-tab">
                                        <div className="product-description">
                                            <div className="nav-desh">
                                                <p>Jelly beans carrot cake icing biscuit oat cake gummi bears tart.
                                                    Lemon drops carrot cake pudding sweet gummi bears. Chocolate cake
                                                    tart cupcake donut topping liquorice sugar plum chocolate bar. Jelly
                                                    beans tiramisu caramels jujubes biscuit liquorice chocolate. Pudding
                                                    toffee jujubes oat cake sweet roll. Lemon drops dessert croissant
                                                    danish cake cupcake. Sweet roll candy chocolate toffee jelly sweet
                                                    roll halvah brownie topping. Marshmallow powder candy sesame snaps
                                                    jelly beans candy canes marshmallow gingerbread pie.</p>
                                            </div>

                                            <div className="nav-desh">
                                                <div className="desh-title">
                                                    <h5>Organic:</h5>
                                                </div>
                                                <p>vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam
                                                    vestibulum morbi blandit cursus risus at ultrices mi tempus
                                                    imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
                                                    natoque penatibus et magnis dis parturient montes nascetur ridiculus
                                                    mus mauris vitae ultricies leo integer malesuada nunc vel risus
                                                    commodo viverra maecenas accumsan lacus vel facilisis volutpat est
                                                    velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit
                                                    amet nisl suscipit adipiscing bibendum est ultricies integer quis
                                                    auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet
                                                    massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada
                                                    proin libero nunc consequat interdum varius sit amet mattis
                                                    vulputate enim nulla aliquet porttitor lacus luctus accumsan.</p>
                                            </div>

                                            <div className="banner-contain nav-desh">
                                                <img src="/images/vegetable/banner/14.jpg"
                                                    className="bg-img" alt="" />
                                                <div className="banner-details p-center banner-b-space w-100 text-center">
                                                    <div>
                                                        <h6 className="ls-expanded theme-color mb-sm-3 mb-1">SUMMER</h6>
                                                        <h2>VEGETABLE</h2>
                                                        <p className="mx-auto mt-1">Save up to 5% OFF</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="nav-desh">
                                                <div className="desh-title">
                                                    <h5>From The Manufacturer:</h5>
                                                </div>
                                                <p>Jelly beans shortbread chupa chups carrot cake jelly-o halvah apple
                                                    pie pudding gingerbread. Apple pie halvah cake tiramisu shortbread
                                                    cotton candy croissant chocolate cake. Tart cupcake caramels gummi
                                                    bears macaroon gingerbread fruitcake marzipan wafer. Marzipan
                                                    dessert cupcake ice cream tootsie roll. Brownie chocolate cake
                                                    pudding cake powder candy ice cream ice cream cake. Jujubes soufflé
                                                    chupa chups cake candy halvah donut. Tart tart icing lemon drops
                                                    fruitcake apple pie.</p>

                                                <p>Dessert liquorice tart soufflé chocolate bar apple pie pastry danish
                                                    soufflé. Gummi bears halvah gingerbread jelly icing. Chocolate cake
                                                    chocolate bar pudding chupa chups bear claw pie dragée donut halvah.
                                                    Gummi bears cookie ice cream jelly-o jujubes sweet croissant.
                                                    Marzipan cotton candy gummi bears lemon drops lollipop lollipop
                                                    chocolate. Ice cream cookie dragée cake sweet roll sweet roll.Lemon
                                                    drops cookie muffin carrot cake chocolate marzipan gingerbread
                                                    topping chocolate bar. Soufflé tiramisu pastry sweet dessert.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                        <div className="table-responsive">
                                            <table className="table info-table">
                                                <tbody>
                                                    <tr>
                                                        <td>Specialty</td>
                                                        <td>Vegetarian</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ingredient Type</td>
                                                        <td>Vegetarian</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brand</td>
                                                        <td>Lavian Exotique</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Form</td>
                                                        <td>Bar Brownie</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Package Information</td>
                                                        <td>Box</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Manufacturer</td>
                                                        <td>Prayagh Nutri Product Pvt Ltd</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Item part number</td>
                                                        <td>LE 014 - 20pcs Crème Bakes (Pack of 2)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Net Quantity</td>
                                                        <td>40.00 count</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="care" role="tabpanel" aria-labelledby="care-tab">
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
                                    </div>

                                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                        <div className="review-box">
                                            <div className="row g-4">
                                                <div className="col-xl-6">
                                                    <div className="review-title">
                                                        <h4 className="fw-500">Customer reviews</h4>
                                                    </div>

                                                    <div className="d-flex">
                                                        <div className="product-rating">
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
                                                        </div>
                                                        <h6 className="ms-3">4.2 Out Of 5</h6>
                                                    </div>

                                                    <div className="rating-box">
                                                        <ul>
                                                            <li>
                                                                <div className="rating-list">
                                                                    <h5>5 Star</h5>
                                                                    <div className="progress">
                                                                        <Slider
                                                                            progress
                                                                            defaultValue={70}
                                                                            readOnly
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="rating-list">
                                                                    <h5>4 Star</h5>
                                                                    <div className="progress">
                                                                    <Slider
                                                                        progress
                                                                        defaultValue={65}
                                                                        readOnly
                                                                    />
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="rating-list">
                                                                    <h5>3 Star</h5>
                                                                    <div className="progress">
                                                                    <Slider
                                                                            progress
                                                                            defaultValue={40}
                                                                            readOnly
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="rating-list">
                                                                    <h5>2 Star</h5>
                                                                    <div className="progress">
                                                                    <Slider
                                                                            progress
                                                                            defaultValue={20}
                                                                            readOnly
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="rating-list">
                                                                    <h5>1 Star</h5>
                                                                    <div className="progress">
                                                                    <Slider
                                                                            progress
                                                                            defaultValue={15}
                                                                            readOnly
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6">
                                                    <div className="review-title">
                                                        <h4 className="fw-500">Add a review</h4>
                                                    </div>

                                                </div>

                                                <div className="col-12">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
     </>
    );
  };

  export default ProductAllInfo;
