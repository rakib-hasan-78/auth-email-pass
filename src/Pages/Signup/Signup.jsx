import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firsebase/firebase.init';
import { toast } from 'react-toastify';
import { emailValidator } from '../../validators/validators';

const Signup = () => {
    const [signUp, setSignUp] = useState({displayName: '', email:'', password:''});
    const [error ,  setError] = useState('');

    const dataPicker = (prop, value)=>{
        
        setSignUp(signUp=>({
            ...signUp,
            [prop] : value,
        }))
    }

    const formHandler = e =>{
        e.preventDefault();
        setError('');
        
        // front-end validators ===> 
        const errMsg = emailValidator(signUp.email)
        if(errMsg){
            toast.error(`${errMsg}`);
            return;
        } 
        else {
            createUserWithEmailAndPassword(auth,
                 signUp.email,
                  signUp.password,
                )
                  .then(async(userCredential)=>{
                    const user = userCredential.user;
    
                    await updateProfile(user, {
                        displayName: signUp.displayName
                    })
                    const toastName = signUp.displayName.split(' ')[0];
                    toast.success(`${toastName} signed up successfully!!!`)
                    console.log(userCredential);
                    console.log('profile data::===',  updateProfile);
                    setSignUp(
                        {displayName: '', email:'', password:''}
                    )
    
                  })
                  .catch(error=>{
                    console.log('error message',error.message);
                    console.log('finding error code', error.code);
                    console.log('finding error name', error.name);
                    if (error.code) {
                        const errorMsg = error.code.replace('auth/','');
                        setError(errorMsg);
                        toast.error(`${errorMsg}`)
                    }
                  })

        }

              
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
                                    <input type="text" className="input" placeholder="Name" name='displayName'
                                    value={signUp.displayName} onChange={(e)=>dataPicker(e.target.name , e.target.value)}/>

                                    <label className="label">Email</label>
                                    <input type="#" className="input" placeholder="Email" name='email'
                                    value={signUp.email} onChange={(e)=>dataPicker(e.target.name,e.target.value)}   
                                    />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='password'
                                    value={signUp.password} onChange={(e)=> dataPicker(e.target.name, e.target.value)}    
                                    />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Sign Up</button>
                                </fieldset>
                                {
                                    error && ( <p>{error}</p> )
                                }
                            </div>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;