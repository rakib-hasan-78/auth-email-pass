import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firsebase/firebase.init';
import { toast } from 'react-toastify';
import validatorFunc from '../../validators/validatorFunc';
import useToggle from '../../assets/toggle';
import useFormHandler from '../../assets/dataPicker';
import { Link } from 'react-router';

const Signup = () => {
    
    const [error ,  setError] = useState('');
    const [showPass, passHandler] = useToggle();
    const [signUp, signupHandler, reset]=useFormHandler({
        displayName:'',
        email:'',
        password:'',
        terms: false
    })

    const formHandler = e =>{
        e.preventDefault();
        setError('');
       
        // front-end user validator
        const errorHandler = validatorFunc(signUp.displayName, signUp.email, signUp.password, signUp.terms)
        if(errorHandler) {
            toast.error(`${errorHandler}`);
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
                    console.log('signed up with terms = ', signUp.terms);
                    console.log(signUp.email, signUp.password, signUp.displayName);
                    reset()
    
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
                                    value={signUp.displayName} onChange={(e)=>signupHandler(e.target.name , e.target.value)}/>

                                    <label className="label">Email</label>
                                    <input type="#" className="input" placeholder="Email" name='email'
                                    value={signUp.email} onChange={(e)=>signupHandler(e.target.name,e.target.value)}   
                                    />
                                    <label className="label">Password</label>
                                    <div className='relative'>

                                    <input type={showPass ? "text":"password"} className="input" placeholder="Password" name='password'
                                    value={signUp.password} onChange={(e)=>signupHandler(e.target.name, e.target.value)}    
                                    />
                                    <button
                                    onClick={passHandler}
                                    className='btn btn-xs absolute top-1/2 -translate-y-1/2 -translate-x-4 right-0 rounded-full w-6 h-6 font-extralight text-white' 
                                    type="button">{showPass ? 
                                    <i className="bi bi-eye "></i> :
                                    <i className="bi bi-eye-slash"></i>}
                                    </button>
                                    </div>
                                    <div>
                                        <label className="label">
                                        <input type="checkbox"
                                        onChange={(e)=> signupHandler(e.target.name, e.target.checked)}
                                         name='terms' className="checkbox" />
                                        Accept our T&C.
                                        </label>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Sign Up</button>
                                    <p>Already Have An Account?<span className='text-blue-400 mx-2'>  <Link to={`/login`}>  Log In</Link>
                                    </span>  
                                     </p>
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

