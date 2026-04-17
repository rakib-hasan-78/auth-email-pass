
const emailValidator = (email)=>{
    // setting all to small letters =>
    const emailToLowercase = email.toLowerCase();
    // selected domains ==>
    const allDomains = ['yahoo','hotmail','outlook','gmail','icloud'];
    const [userName, domains] = email.split('@');

    // if the email is empty or just spaces only 
    if(!email.trim()) return `Email cannot be empty or just spaces.`;
    // if email text finds uppercase 
    if(email!==emailToLowercase) return `Email should not contain uppercase letters.`;
    // if the email format is incorrect = = =>
    if(!userName || !domains) return `Inappropriate Email format`;
    // if '.' is missing in domain
    const dot = domains.split('.')[0];
    if(!allDomains.includes(dot)) return `Only Gmail, iCloud, Yahoo, Hotmail, or Outlook are accepted.`
    // if domain starts with dot ===>
    if(domains.startsWith('.')) return `Domain Can Not Start With Dot`
    // if user name is smaller 
    if(userName.length<3) return `Username has to be at least 3 characters before @.`
    // if email starts with symbols 
    const startsWithSymbol = /^[^a-zA-Z0-9]/;
    if(!startsWithSymbol.test(userName.charAt(0))) return `Email Can not start with a symbol`

    // if the last letter contains symbol or numbers 
    const lastLetterSymbol = /^[a-z][a-z]*[a-z]$/;
    if(!lastLetterSymbol.test(domains.length-1)) return `Email Can Not End With Numbers or Symbols`
     // check if only valid symbol - _ . is in the mail ===>
    if(!/[^a-zA-Z0-9._-]/.test(userName)) return `Email Can Only Contain Letters, Numbers, And  ' .   -  _ '`;
    
    return null;
    
}

export {emailValidator}