
import validatorFunc from "../validators/validatorFunc";
import { toast } from "react-toastify";
import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firsebase/firebase.init";



const loginHandler = (e, email, password,reset, setLoader)=>{
e.preventDefault();
// declaring state =>
const loginValidators = validatorFunc(undefined, 
    email,password, undefined);

    if (loginValidators) {
        toast.error(loginValidators);
        return
    }
    else{
        setLoader(true)
        signInWithEmailAndPassword(auth,
             email, 
             password)
             .then(result=>{
                 const user = result.user;
                //* *  if the user is not verified====>
                 if (!user.emailVerified) {
                    toast.error(`verify ${user.email} to login.`)
                    signOut(auth);
                    return;
                 }
                 // resetting initial state
                 reset();
                if (user) {
                    toast.success(`Hello ${user.displayName.split(" ")[0]} ! `)
                    console.log(user);
                    return;
                } else{
                    toast.success(`Log In SuccessFully!`)
                }
             })
             .catch(error=>{
                const errorMsg = error.code.replace(`auth/`, ``);
                toast.error(errorMsg);
             })
             .finally(()=>{
                setLoader(false);
             })
    }

}
//**  forgot password handler
const forgotPasswordHandler =(emailRef)=>{
    const email = emailRef.current.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
    .then(()=>{
        toast.info(`A link has been sent to ${email}`);
    })
} 
export {loginHandler, forgotPasswordHandler};

