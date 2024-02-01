import {NextApiRequest,NextApiResponse} from 'next';
import {isPasswordStrong, isValidEmail, isValidPhoneNumber, hasValidLength} from '../../../app/lib/auth/validator'




export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  console.log("Reaached")
  if(req.method === "POST"){
    
    const {firstName,
      lastName,
      email,
      phone,
      city,
      password}= req.body;
      const errors :String[] = [];
      const validationSchema = [
        {
          valid: hasValidLength(firstName),
          errorMessage: "First name is invalid",
        },
        {
          valid: hasValidLength(lastName),
          errorMessage: "Last name is invalid",
        },
        {
          valid: isValidEmail(email),
          errorMessage: "Email is invalid",
        },
        {
          valid: isValidPhoneNumber(phone),
          errorMessage: "Phone number is invalid",
        },
        {
          valid: hasValidLength(city),
          errorMessage: "City is invalid",
        },
        {
          valid: isPasswordStrong(password),
          errorMessage: "Password is not strong enough",
        },
      ];
      
      validationSchema.forEach((check) => {
        if (!check.valid) {
          errors.push(check.errorMessage);
        }
      });
      if(errors.length){
        return res.status(400).json({errorMessage:errors[0]});
      }
   
      res.status(200).json({
         hello:"message",
      });
   }
}
