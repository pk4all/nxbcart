import { Link } from '@inertiajs/react';
interface MainMenuProps {
    className?: string;
    title?:string
}
  const Address = () => {
    return (
        <>                       
            <div className="checkout-title">
                <h4>Delivery Address</h4>
            </div>

            <div className="checkout-detail">
                <div className="row g-4">
                    <div className="col-xxl-6 col-lg-12 col-md-6">
                        <div className="delivery-address-box">
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="jack"
                                        id="flexRadioDefault1" />
                                </div>

                                <div className="label">
                                    <label>Home</label>
                                </div>

                                <ul className="delivery-address-detail">
                                    <li>
                                        <h4 className="fw-500">Jack Jennas</h4>
                                    </li>

                                    <li>
                                        <p className="text-content"><span
                                                className="text-title">Address
                                                : </span>8424 James Lane South San
                                            Francisco, CA 94080</p>
                                    </li>

                                    <li>
                                        <h6 className="text-content"><span
                                                className="text-title">Pin Code
                                                :</span> +380</h6>
                                    </li>

                                    <li>
                                        <h6 className="text-content mb-0"><span
                                                className="text-title">Phone
                                                :</span> + 380 (0564) 53 - 29 - 68</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-6 col-lg-12 col-md-6">
                        <div className="delivery-address-box">
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="jack"
                                        id="flexRadioDefault2" checked />
                                </div>

                                <div className="label">
                                    <label>Office</label>
                                </div>

                                <ul className="delivery-address-detail">
                                    <li>
                                        <h4 className="fw-500">Jack Jennas</h4>
                                    </li>

                                    <li>
                                        <p className="text-content"><span
                                                className="text-title">Address
                                                :</span>Nakhimovskiy R-N / Lastovaya Ul.,
                                            bld. 5/A, appt. 12
                                        </p>
                                    </li>

                                    <li>
                                        <h6 className="text-content"><span
                                                className="text-title">Pin Code :</span>
                                            +380</h6>
                                    </li>

                                    <li>
                                        <h6 className="text-content mb-0"><span
                                                className="text-title">Phone
                                                :</span> + 380 (0564) 53 - 29 - 68</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  };

  export default Address;
