
import validatorFunc from "../validators/validatorFunc";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
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
                 // resetting initial state
 
                 reset();
                const user = result.user;
                if (user) {
                    toast.success(`Hello ${user.displayName.split(" ")[0]} ! `)
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
export default loginHandler;


