import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';

const Login = () => {
    const {signInWithGoogle, loginWithUsernamePassword} = useContext(AuthContext);
    const navigate = useNavigate();

    const signInWithGoogleHandler = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(err => console.log(err));
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithUsernamePassword(email, password)
            .then(result => {
                console.log(result.user);
                navigate("/");
            }).catch(error => {
                console.log(error);
            });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-4/5 mx-auto hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={onSubmitHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <button className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <div className="divider">OR</div>
                        </div>
                    </form>
                    <div className='text-center mb-5'>
                        <button onClick={signInWithGoogleHandler} className="btn btn-primary">Login With Google</button>
                        <div>You don't have an account? <Link className='underline' to={"/register"}>Register</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;