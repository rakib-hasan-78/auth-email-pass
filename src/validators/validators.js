

const nameValidator = (name) => {
    
    const userName = name.trim();
    // if the name field is empty =====>
    if(!userName) return `User Name Can Not Be Empty or Spaces`;
    // length of name ==>
    if(userName.length<3) return `Name Must Contain Minimum 3 Letters.`;
    // number or symbols in the name ===>
    if (!/^[a-zA-Z]+( [a-zA-Z]+)*$/.test(userName))
        return "Only Letters Are Valid For Name";

    return null;
}

// email validator
const emailValidator = (email)=>{
    // setting all to small letters =>
    const emailToLowercase = email.toLowerCase();
    // if the email is empty or just spaces only 
    if(!email.trim()) return `Email cannot be empty or just spaces.`;
    // if email misses @ X
    if(!email.includes('@')) return `@ Is Missing Before Domain Name.`
    // selected domains ==>
    const allDomains = ['yahoo','hotmail','outlook','gmail','icloud'];
    const [userName, domains] = email.split('@');
    
    // if email text finds uppercase 
    if(email!==emailToLowercase) return `Email should not contain uppercase letters.`;
    // if the email format is incorrect = = => X
    if(!userName || !domains) return `Inappropriate Email format`;

    // if '.' is missing in domain
    const dot = domains.split('.')[0];
    if(!allDomains.includes(dot)) return `Only Gmail, iCloud, Yahoo, Hotmail, or Outlook are accepted.`
    // if domain starts with dot ===>
    if(domains.startsWith('.')) return `Domain Can Not Start With Dot`
    // if user name is smaller 
    if(userName.length<3) return `Username has to be at least 3 characters before @.`
    // start check
    if (!/^[a-zA-Z0-9]/.test(userName)) {
        return "Email cannot start with a symbol";
    }
    
    // allowed characters check
    if (/[^a-zA-Z0-9._-]/.test(userName)) {
        return "Email Can Only Contain Letters, Numbers, . _ -";
    }
        // if the last letter contains symbol or numbers 
    if (!/[a-z]$/.test(domains)) {
    return "Email cannot end with numbers or symbols";
    }
    
    return null;
    
}
// password validator 
const passwordValidator = (password) => {
    const pwrd = password.trim();
    // empty password....
    if (!pwrd) return `Password Can't Be Empty`;
    // password length .... 
    if(pwrd.length<6) return `Password Needs At Least 6 Characters`;
    // capital letter in password ..... 
    if(!/[A-Z]/.test(pwrd)) return `Password Must Contain minimum A Capital Letter`;
    // checking small letter .....
    if(!/[a-z]/.test(pwrd)) return `Password Must Contain Minimum One Small Letter`;
    // checking Numbers ... 
    if (!/[0-9]/.test(pwrd)) return `At Least One Number Needed`;
    // symbol check 
    if(!/[!@#$%^&*]/.test(pwrd)) return `At Least One Symbol (!@#$%^&*) Needed`;
    
    return null;
}

export { nameValidator,emailValidator, passwordValidator};