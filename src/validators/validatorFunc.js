import { emailValidator, nameValidator } from "./validators";

const validatorFunc = (name, email) => {
    // nameValidator 
    if(nameValidator(name)) return `${nameValidator(name)}`;
    if(emailValidator(email)) return `${emailValidator(email)}`
    
}

export default validatorFunc;