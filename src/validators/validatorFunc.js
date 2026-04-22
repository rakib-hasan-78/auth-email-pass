import { checkBoxValidator, emailValidator, nameValidator, passwordValidator } from "./validators";

const validatorFunc = (name, email, password, terms) => {
    // nameValidator 
    if (name!== undefined) {
        const error = nameValidator(name);
        if(error) return error;
    }
    // email validator 
    if(email!==undefined){
        const error = emailValidator(email);
        if(error) return error;
    }
    // password validator 
    if(password!==undefined){
        const error = passwordValidator(password);
        if(error) return error;
    }
    // terms validator 
    if(terms!==undefined){
        const error = checkBoxValidator(terms);
        if(error) return error;
    }
    return null;
}

export default validatorFunc;