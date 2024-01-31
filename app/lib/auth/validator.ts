export function isPasswordStrength(password: string): boolean {
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
