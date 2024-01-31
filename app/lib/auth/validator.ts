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
  
  