import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
import {Modal, ButtonToolbar, Button, Placeholder,Image} from 'rsuite'; 
import 'rsuite/Modal/styles/index.css';
const HeaderLogin = () => {
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const handleOpen = (value:any) => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    

    useEffect(() => {
        // fetch("/api/categories")
        //     .then((response) => response.json())
        //     .then((data) => {setCategories(data);setLoading(false);})
        //     .catch((err) => console.error("Error fetching categories:", err));
        setLoading(false);
      }, []);
    if (loading) {
        return <li><Placeholder.Graph active width={50} height={50} /></li>;
    }
    return (     
        <>
            <li>
                <button className="header-icon" onClick={() => handleOpen('sm')}>
                    <i className="iconly-Profile icli"></i>
                </button>
            </li>
        
            <Modal size='md' open={open} onClose={handleClose}>
                <Modal.Header>
                {/* <Modal.Title>Welcome To Nextbuying</Modal.Title> */}
                </Modal.Header>
                <Modal.Body classPrefix={"modal-body"} >
                    <div className="row log-in-section">
                        <div className="col-lg-6">
                            <div className="image-contain">
                            <Image
                                className="img-fluid"
                                src='/images/log-in.png'
                                placeholder={<Placeholder.Graph active />}
                                alt='Login'
                            />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="log-in-box">
                                <div className="log-in-title">
                                    <h3>Welcome To NXB</h3>
                                    <h4>Log In Your Account</h4>
                                </div>
                                <div className="input-box">
                                    <form className="row g-4" method="post">
                                        <div className="col-12">
                                            <div className="form-floating theme-form-floating log-in-form">
                                                <input type="number" className="form-control" id="phone" placeholder="Mobile No" />
                                                <label>Mobile No</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="forgot-box">
                                                <div className="form-check ps-0 m-0 remember-box">
                                                    <input className="checkbox_animated check-box" type="checkbox" id="flexCheckDefault" />
                                                    <label className="form-check-label">Remember me</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="btn btn-animation w-100 justify-content-center" type="button">Log In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
  };

  export default HeaderLogin;
