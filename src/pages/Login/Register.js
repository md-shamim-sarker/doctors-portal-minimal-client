import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        // const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
            }).catch(err => {
                console.log(err);
            });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-4/5 mx-auto hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={onSubmitHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input name='fullName' type="text" placeholder="Full Name" className="input input-bordered" />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div>You already have an account? <Link className='underline' to={"/login"}>Login</Link></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;