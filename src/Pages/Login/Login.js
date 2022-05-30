import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Looding from './Looding';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);


    let signInError;


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading || loading1) {
        <Looding></Looding>
    }

    if (error || error1) {
        signInError = <p className='text-red-500'><small>{error?.massage || error1?.massage}</small></p>
    }

    useEffect(() => {
        if (user || user1) {
            navigate(from, { replace: true });
        }
    }, [user, user1, from, navigate])

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

    }



    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        massage: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500" >{errors.email.massage}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500" >{errors.email.massage}</span>}

                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        massage: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500" >{errors.password.massage}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500" >{errors.password.massage}</span>}

                            </label>
                        </div>

                        {signInError}
                        <input className='btn w-full max-w-xs' type="submit" value='Login' />
                    </form>
                    <p>New to Bicycle Parts? <Link to='/register' className='text-info'>Please Register</Link></p>
                    {/* <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p> */}
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-accent">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;