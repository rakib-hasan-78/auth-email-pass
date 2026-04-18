

const emailValidator = (email)=>{
    // setting all to small letters =>
    const emailToLowercase = email.toLowerCase();
    // if email misses @ X
    if(!email.includes('@')) return `@ Is Missing Before Domain Name.`
    // selected domains ==>
    const allDomains = ['yahoo','hotmail','outlook','gmail','icloud'];
    const [userName, domains] = email.split('@');
    
    // if the email is empty or just spaces only 
    if(!email.trim()) return `Email cannot be empty or just spaces.`;
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

export {emailValidator}