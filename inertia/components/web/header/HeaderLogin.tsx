import { Link,usePage } from "@inertiajs/react";
import { useState,useEffect } from "react";
import {Modal, ButtonToolbar, Button,Loader, Placeholder,Image} from 'rsuite'; 
import 'rsuite/Modal/styles/index.css';
import 'rsuite/Loader/styles/index.css';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useCsrfToken from "../../../hooks/useCsrfToken";

const HeaderLogin = () => {
    const [loading, setLoading] = useState(true);
    const [btnLoading, setBtnLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [mobileNumber, setMobileNumber] = useState("");
    const cd = usePage().props?.customer;
    const [customer, setCustomer] = useState(cd);
    //  const {customer} = usePage().props;
     //console.log(customer,'page data')
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const csrfToken = useCsrfToken();
    const schema = yup.object({
        mobile:yup
                .string()
                .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
                .required("Mobile number is required"),
        
    });
    const otpSchema = yup.object().shape({
        otp: yup
          .string()
          .matches(/^\d{6}$/, "OTP must be a 6-digit number")
          .required("OTP is required"),
        remember_me:yup.string().notRequired(),
      });
    const {
        register:registerMobile,
        handleSubmit:handleMobileSubmit,
        formState: { errors:mobileErrors },
        setError:setMobileErrors,
      } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
          mobile: "",
        },
      });
      const {
        register: registerOTP,
        handleSubmit: handleOTPSubmit,
        formState: { errors: otpErrors },
        setError:setOtpErrors
      } = useForm({
        resolver: yupResolver(otpSchema),
        defaultValues: { otp: "",remember_me: "", },
      });

      const onMobileSubmit = async (data:any) => {
        try {
            setBtnLoading(true);
            const response = await fetch('/api/customer/send-otp', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  "X-CSRF-TOKEN": csrfToken
                },
                body: JSON.stringify(data),
              });
              let result = await response.json();

              if (!response.ok) {
                setMobileErrors("mobile", { type: "server", message: result.message || "Server error" });
              }else{
               setStep(2);
               setMobileNumber(data?.mobile);
              }
              setBtnLoading(false);
        } catch (error) {
            setBtnLoading(false);
            setMobileErrors("mobile", { type: "network", message: error.message || "Internal Server error" });
        }
      };

      const onOtpSubmit = async (data:any) => {
        data.mobile=mobileNumber;
        try {
            setBtnLoading(true);
            const response = await fetch('/api/customer/verify-otp', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  "X-CSRF-TOKEN": csrfToken
                },
                body: JSON.stringify(data),
              });
              let result = await response.json();
              if (!response.ok) {
                setOtpErrors("otp", { type: "server", message: result.message || "Server error" });
              }else{
                setStep(1);
                setMobileNumber('');
                localStorage.setItem('token',result.token);
                handleClose();
                setCustomer(result.customer);
              }
              setBtnLoading(false);
        } catch (error) {
            setBtnLoading(false);
            setOtpErrors("otp", { type: "network", message: error.message || "Internal Server error" });
        }
        console.log("Submitted otp Data:", data);
      };

      const logout = async () => {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "X-CSRF-TOKEN": csrfToken
            },
            body: JSON.stringify({}),
          });
          if (!response.ok) {
            setOtpErrors("otp", { type: "server", message:"Server error" });
          }else{
            localStorage.removeItem('token');
            setCustomer(null);
          }
      }
    useEffect(() => {
        setLoading(false);
      }, []);
    if (loading) {
        return <li><Placeholder.Graph active width={50} height={50} /></li>;
    }
    return (     
        <>
            <li className=" onhover-dropdown">
                {customer?(
                    <>
                    <Link className="header-icon" href={'/profile'}>
                        <i className="iconly-Profile icli"></i>
                    </Link>
                    <div className="onhover-div onhover-div-login">
                    <ul className="user-box-name">
                        <li className="user-menu-item">
                            <Link href="/profile">
                                <i className="iconly-Profile icli"></i>
                                <span className="m-l-2">Profile</span>
                            </Link>
                        </li>
                        <li className="user-menu-item">
                            <Link href="/profile">
                                <i className="iconly-Buy icli"></i>
                                <span className="m-l-2">Orders</span>
                            </Link>
                        </li>
                        <li className="user-menu-item">
                            <Link href="/setting">
                                <i className="iconly-Setting icli"></i>
                                <span className="m-l-2">Setting</span>
                            </Link>
                        </li>

                        <li className="user-menu-item">
                            <button className="" onClick={logout}>
                                <i className="iconly-Logout icli"></i>
                                <span className="m-l-2">Log out</span>
                            </button>
                        </li>
                    </ul>
                    </div>
                    </>
                ):(
                    <>
                    <button className="header-icon" onClick={() => handleOpen()}>
                        <i className="iconly-Profile icli"></i>
                    </button>
                    <Modal size='md' open={open} onClose={handleClose}>
                <Modal.Header>
                {/* <Modal.Title>Welcome To Nextbuying</Modal.Title> */}
                </Modal.Header>
                <Modal.Body classPrefix={"modal-body"} >
                    <div className="row log-in-section">
                        <div className="col-md-6">
                            <div className="image-contain">
                            <Image
                                className="img-fluid"
                                src='/images/log-in.png'
                                placeholder={<Placeholder.Graph active />}
                                alt='Login'
                            />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="log-in-box">
                                
                            { step==1 && (
                                <> <div className="log-in-title">
                                    <h3>Welcome To NXB</h3>
                                    <h4>Log In Your Account</h4>
                                </div>
                                <div className="input-box">
                                <form className="row g-4" method="post" onSubmit={handleMobileSubmit(onMobileSubmit)}>
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <input type="text" {...registerMobile("mobile")}className="form-control" id="mobile" placeholder="Mobile No" />
                                            <label className="f-w"><i className="fa fa-whatsapp"></i></label>
                                            {mobileErrors.mobile && <p style={{ color: "red" }}>{mobileErrors.mobile.message}</p>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-animation w-100 justify-content-center" type="submit" disabled={btnLoading}>{btnLoading?<Loader />:'Send Otp'}</button>
                                    </div>
                                </form>
                                </div>
                                </>
                            )}
                             { step==2 && (
                                <>    
                                <div className="log-in-title">
                                <h3 className="text-title">Please enter the one time password to verify your account</h3>
                                    <h5 className="text-content">A code has been sent to <span>{mobileNumber}</span> 
                                    <button className="m-l-2" type="button" onClick={()=>{setStep(1)}}>
                                        <i className="fa fa-edit"></i>
                                    </button>
                                    </h5>
                                </div>
                                <div className="input-box">
                                <form className="row g-4" method="post" onSubmit={handleOTPSubmit(onOtpSubmit)}>
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <input type="text" {...registerOTP("otp")}className="form-control" id="Otp" placeholder="Otp" />
                                            <label className="f-w">Otp</label>
                                            {otpErrors.otp && <p style={{ color: "red" }}>{otpErrors.otp.message}</p>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="forgot-box">
                                            <div className="form-check ps-0 m-0 remember-box">
                                                <input className="checkbox_animated check-box" type="checkbox" id="remeber_me" {...registerOTP("remember_me")}/>
                                                <label className="form-check-label">Remember me</label>
                                               
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-animation w-100 justify-content-center" type="submit" disabled={btnLoading}>{btnLoading?<Loader />:'Login'}</button>
                                    </div>
                                </form>
                                </div>
                                </>
                             )}
                            </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                    </>
                    
                )}
            </li>
        
            
        </>
    );
  };

  export default HeaderLogin;
