import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { auth } from '../../firsebase/firebase.init';

const Signup = () => {
    const [signUp, setSignUp] = useState({name: '', email:'', password:''});

    const dataPicker = (prop, value)=>{
        
        setSignUp(signUp=>({
            ...signUp,
            [prop] : value,
        }))
    }

    const formHandler = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,
             signUp.email,
              signUp.password)
              .then(userCredential=>{
                console.log(userCredential);
              })
              .catch(error=>{
                console.log(error.message);
              })
              
        setSignUp({name: '', email:'', password:''})
    }

    return (
        <div>
            <h1 className='primary-title '
            >
            Hiiiiii.... i'm Sign Up page
            </h1>
            <div className='w-full flex items-center justify-center'>
                <form onSubmit={formHandler} action="#" className='w-5/12 flex items-center justify-center'>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Full Name</label>
                                    <input type="text" className="input" placeholder="Name" name='name'
                                    value={signUp.name} onChange={(e)=>dataPicker(e.target.name , e.target.value)}/>

                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email'
                                    value={signUp.email} onChange={(e)=>dataPicker(e.target.name,e.target.value)}   
                                    />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='password'
                                    value={signUp.password} onChange={(e)=> dataPicker(e.target.name, e.target.value)}    
                                    />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Sign Up</button>
                                </fieldset>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;