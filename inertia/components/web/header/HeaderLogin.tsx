import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
import {Modal, ButtonToolbar, Button, Placeholder,Image} from 'rsuite'; 
import 'rsuite/Modal/styles/index.css';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useCsrfToken from "../../../hooks/useCsrfToken";
const HeaderLogin = () => {
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [mobileNumber, setMobileNumber] = useState("");
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
      } = useForm({
        resolver: yupResolver(otpSchema),
        defaultValues: { otp: "",remember_me: "", },
      });

      const onMobileSubmit = async (data:any) => {
        const response = await fetch('/api/customer/send-otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "X-CSRF-TOKEN": csrfToken
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          if (!response.ok) {
            setMobileErrors("mobile", { type: "server", message: result.message || "Server error" });
          }else{
            
          }
      };

      const onOtpSubmit = (data:any) => {
        data.mobile=mobileNumber;
        // Inertia.post('/api/customer/verify-otp',data,
        //     {
        //         preserveScroll: true,
        //         headers: {
        //             "X-CSRF-TOKEN": csrfToken,
        //         },
        //         onError: (error:any) => {
        //             console.log("Validation Errors:", error);
        //         },
        //         onSuccess:(res:any)=>{
        //             setMobileNumber(data.mobile);
        //             setStep(2);
        //         }
        //     }
        // );
        console.log("Submitted Data:", data);
      };
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
                <button className="header-icon" onClick={() => handleOpen()}>
                    <i className="iconly-Profile icli"></i>
                </button>
            </li>
        
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
                                <div className="log-in-title">
                                    <h3>Welcome To NXB</h3>
                                    <h4>Log In Your Account</h4>
                                </div>
                            { step==1 && (
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
                                        <button className="btn btn-animation w-100 justify-content-center" type="submit">Send Otp</button>
                                    </div>
                                </form>
                                </div>
                            )}
                             { step==2 && (
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
                                        <button className="btn btn-animation w-100 justify-content-center" type="submit">Submit</button>
                                    </div>
                                </form>
                                </div>
                             )}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
  };

  export default HeaderLogin;
