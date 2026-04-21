import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className='primary-title'
            >
                i am Log In page......
            </h1>
            <form action="#">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5">
                
                <p className='text-center'>please log in your account</p>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>
                    <div>
                        <p className="link link-hover">No account yet?  <Link to={`/signup`}>  <span className='text-blue-400'>    sign up</span></Link> </p>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;