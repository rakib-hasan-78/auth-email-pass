import React from 'react';

const Login = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className='primary-title'
            >
                i am Log In page......
            </h1>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5">
            
            <p className='text-center'>please log in your account</p>

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </div>
    );
};

export default Login;