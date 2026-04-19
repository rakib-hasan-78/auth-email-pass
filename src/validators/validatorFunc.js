import { emailValidator, nameValidator, passwordValidator } from "./validators";

const validatorFunc = (name, email, password) => {
    // nameValidator 
    if(nameValidator(name)) return `${nameValidator(name)}`;
    if(emailValidator(email)) return `${emailValidator(email)}`;
    if(passwordValidator(password)) return `${passwordValidator(password)}`
    
}

export default validatorFunc;