import { Head,Link, usePage, useForm  } from '@inertiajs/react'
import { RegUser } from '../../../types';
import TextInput from '../../../components/form/TextInput';
import {CheckboxInput} from '../../../components/form/CheckboxInput';

import LoadingButton from '../../../components/button/LoadingButton';
import useCsrfToken from "../../../hooks/useCsrfToken";
export default function Login() {
    const csrfToken = useCsrfToken();
    const { user } = usePage<{ user: RegUser[] }>().props;
    const { data, setData, errors, post, processing } = useForm({
        email: '',
        password: '',
        remember_me:true as boolean,
        invalid:''
    });
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/admin/login',{
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
      <Head title="Admin Login" />

    <section className="log-in-section background-image-2 section-b-space">
        <div className="container-fluid-lg w-100">
            <div className="row">
                <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                    <div className="image-contain">
                        <img src="/images/log-in.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                    <div className="log-in-box">
                        <div className="log-in-title">
                            <h3>Welcome To NXBkart</h3>
                            <h4>Log In Your Account</h4>
                        </div>
                        <div className="input-box">
                            <form className="row g-4" onSubmit={handleSubmit}>
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
                                            required
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
                                            required
                                        />
                                        <label>Password</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="forgot-box">
                                        <div className="form-check ps-0 m-0 remember-box">
                                            <CheckboxInput
                                                label="Remember me"
                                                name="remember_me"
                                                id="remember_me"
                                                checked={data.remember_me}
                                                onChange={e => setData('remember_me', e.target.checked)}
                                            />
                                        </div>
                                        {/* <a href="forgot.html" className="forgot-password">Forgot Password?</a> */}
                                    </div>
                                </div>
                                <div className="col-12">
                                {errors.invalid && (
                                    <div className='error-alert'>
                                        {errors.invalid}
                                    </div>
                                    
                                )}
                                </div>
                                <div className="col-12">
                                    <LoadingButton
                                        loading={processing}
                                        type="submit"
                                        className="btn-indigo btn btn-animation w-100"
                                    >
                                        Log In
                                    </LoadingButton>
                                </div>
                            </form>
                        </div>
                        <div className="sign-up-box">
                            <h4>Don't have an account?</h4>
                            <a href="/admin/sign-up">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}