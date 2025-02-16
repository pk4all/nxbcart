import { Head,Link, usePage, useForm  } from '@inertiajs/react'
import { RegUser } from '../../../types';
import TextInput from '../../../components/form/TextInput';
import LoadingButton from '../../../components/button/LoadingButton';
import useCsrfToken from "../../../hooks/useCsrfToken";
export default function Signup() {
    const csrfToken = useCsrfToken();
    const { user } = usePage<{ user: RegUser[] }>().props;
    const { data, setData, errors, post, processing } = useForm({
        full_name: '',
        email: '',
        mobile: '',
        password: '',
    });
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/admin/sign-up',{
            preserveScroll: true,
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            onError: (error) => {
                console.log("Validation Errors:", error);
            },
        });
    }

  return (
    <>
      <Head title="Admin Signup" />
      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
            <div className="row">
                <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                    <div className="image-contain">
                        <img src="/images/sign-up.png" className="img-fluid" alt="" />
                    </div>
                </div>

                <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                    <div className="log-in-box">
                        <div className="log-in-title">
                            <h3>Welcome To NXBkart</h3>
                            <h4>Create New Account</h4>
                        </div>

                        <div className="input-box">
                            <form className="row g-4" onSubmit={handleSubmit} >
                                <div className="col-12">
                                    <div className="form-floating theme-form-floating">
                                        <TextInput
                                            name="first_name"
                                            error={errors.full_name}
                                            value={data.full_name}
                                            onChange={e => setData('full_name', e.target.value)}
                                            placeholder="First Name"
                                            className={'form-control'}
                                            type='text'
                                        />
                                        <label>Full Name</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating theme-form-floating">
                                        <TextInput
                                            name="email"
                                            error={errors.email}
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            placeholder="Email Address"
                                            className={'form-control'}
                                            type='email'
                                        />
                                        <label>Email Address</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating theme-form-floating">
                                        <TextInput
                                            name="password"
                                            error={errors.password}
                                            value={data.password}
                                            onChange={e => setData('password', e.target.value)}
                                            placeholder="Password"
                                            className={'form-control'}
                                            type='password'
                                        />
                                        <label>Password</label>
                                    </div>
                                </div>

                                {/* <div className="col-12">
                                    <div className="forgot-box">
                                        <div className="form-check ps-0 m-0 remember-box">
                                            <input className="checkbox_animated check-box" type="checkbox"
                                                id="flexCheckDefault" />
                                            <label className="form-check-label">I agree with
                                                <span>Terms</span> and <span>Privacy</span></label>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="col-12">
                                    <LoadingButton
                                        loading={processing}
                                        type="submit"
                                        className="btn-indigo btn btn-animation w-100"
                                    >
                                        Sign Up
                                    </LoadingButton>
                                </div>
                            </form>
                        </div>

                        

                        <div className="sign-up-box">
                            <h4>Already have an account?</h4>
                            <a href="/admin">Log In</a>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
            </div>
        </div>
    </section>
    </>
  )
}