import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
const Login = () => {
    const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser)

    let signInError;
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    
    useEffect(() => {
        if (token) {
            navigate(from, {replace: true});
        }
    }, [token, from , navigate])

    
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    if ( loading || gloading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }
    return (
        <div className='flex h-screen justify-center my-4 items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <p className="lebel-text-alt text-red-500">{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className="lebel-text-alt text-red-500">{errors.email.message}</p>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <p className="lebel-text-alt text-red-500">{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className="lebel-text-alt text-red-500">{errors.password.message}</p>}
                            </label>
                        </div>
                        {signInError}
                        <input className="btn w-full max-w-xs text-white" type="Submit" value='login' />
                    </form>
                    <p><small>New to Doctors Portal! <Link className='text-secondary' to= "/signup">Create New Acoount</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;