
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Looding from './Looding';

const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || user1);

    const navigate = useNavigate();

    let signInError;

    if (error || error1 || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || error1?.message || updateError?.message}</small></p>
    }


    if (user || user1) {
        navigate('/home');
    }

    if (loading || loading1 || updating) {
        <Looding></Looding>
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })

    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            massage: 'Name is required'
                        }
                    })} />
                <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500" >{errors.name.massage}</span>}
        </label>
                        </div >

    <div className="form-control w-full max-w-xs" >
        <label className="label" >
            <span className="label-text" > Email</span >
                            </label >
                            <input type="email" placeholder="Your Email"className="input input-bordered w-full max-w-xs"
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
                            <label className="label" >
    { errors.email?.type === 'required' && <span className="label-text-alt text-red-500" > { errors.email.massage }</span>}
{ errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500" > { errors.email.massage }</span >}

                            </label >
                        </div >

    <div className="form-control w-full max-w-xs" >
        <label className="label" >
            <span className="label-text" > Password</span >
                            </label >
                            <input type="password" placeholder="Password"className="input input-bordered w-full max-w-xs"
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
                            <label className="label" >
    { errors.password?.type === 'required' && <span className="label-text-alt text-red-500" > { errors.password.massage }</span>}
{ errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500" >{errors.password.massage}</span> }

                            </label >
                        </div >
    { signInError }
    < input className = 'btn w-full max-w-xs' type = "submit" value = 'Register' />
                    </form >
    <p>Already have an account?<Link to='/login' className='text-info'>Please Login</Link></p>
{/* <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p> */ }
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-accent">Continue With Google</button>
                </div >
            </div >
        </div >
    );
};

export default Register;