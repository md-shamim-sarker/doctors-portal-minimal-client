import React from 'react';
import login from '../../../assets/login.png';

const Hero = () => {
    return (
        <div className="w-4/5 mx-auto hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={login} className="max-w-sm" alt='...' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;