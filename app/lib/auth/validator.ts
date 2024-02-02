export function isPasswordStrong(password: string): boolean {
    // Define criteria for password strength
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    // Check the criteria and determine password strength
    if (password.length < minLength) {
      return false;
    }
  
    const criteriaMet =
      hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter;
  
    return criteriaMet ;
  }

  export function isValidEmail(email: string): boolean {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  
 export function isValidPhoneNumber(phoneNumber: string): boolean {
    // Regular expression for basic phone number validation
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }
  
  export function hasValidLength(str:String,minLength:number=1, maxLength:number=2000):boolean{
    const length = str?.length;
    return length >= minLength && length <= maxLength;
  }