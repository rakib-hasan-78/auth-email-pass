import { checkBoxValidator, emailValidator, nameValidator, passwordValidator } from "./validators";

const validatorFunc = (name, email, password, terms) => {
    // nameValidator 
    if(nameValidator(name)) return `${nameValidator(name)}`;
    if(emailValidator(email)) return `${emailValidator(email)}`;
    if(passwordValidator(password)) return `${passwordValidator(password)}`
    if(checkBoxValidator(terms)) return `${checkBoxValidator(terms)}`;
}

export default validatorFunc;