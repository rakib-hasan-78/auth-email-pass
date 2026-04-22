import React, { useState } from 'react';
import { Link } from 'react-router';
import useFormHandler from '../../assets/dataPicker';
import loginHandler from '../../assets/actionHandlers';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [login,setLogin, reset] = useFormHandler({
        email:'',
        password:''
    });

    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className='primary-title'
            >
                i am Log In page......
            </h1>
            <form onSubmit={(e)=>loginHandler(e, login.email, login.password, reset, setLoading)} action="#">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5">
                
                <p className='text-center'>please log in your account</p>

                <label className="label">Email</label>
                <input value={login.email} name='email' onChange={(e)=>setLogin(e.target.name, e.target.value)} type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input value={login.password} type="password" name='password' onChange={(e)=>setLogin(e.target.name, e.target.value)} className="input" placeholder="Password" />

                <button 
                type='submit' 
                className="btn btn-neutral mt-4btn btn-neutral mt-4 w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={loading}
                >

                {loading ? 
               
                <p className='text-secondary'><span className="loading loading-spinner text-secondary">   </span> Loading.... </p> 
                 :`Log In`}

                </button>
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