import {NextApiRequest,NextApiResponse} from 'next';
import {isValidEmail, hasValidLength} from '../../../app/lib/auth/validator'
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import * as jose from 'jose';
import { setCookie } from "cookies-next";


const prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if(req.method === "POST"){
    
    const {
      email,
      password}= req.body;
      const errors :String[] = [];
      const validationSchema = [
       
        {
          valid: isValidEmail(email),
          errorMessage: "Invalid email",
        },
        {
          valid: hasValidLength(password),
          errorMessage: "Invalid Credentials",
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
   const user = await prisma.user.findUnique({
    where:{
      email
    }
   })
   if(!user){
    return res.status(401).json({errorMessage:"Invalid Credentials"});
   }
   const isMatch = await bcrypt.compare(password,user.password);
   if(!isMatch){
    return res.status(401).json({errorMessage:"Invalid Credentials"});
   }

   
   const alg = "HS256"
   const secret = new TextEncoder().encode(process.env.JWT_SECRET)
   const token = await new jose.SignJWT({email: user.email}).setProtectedHeader({alg}).setExpirationTime("24h").sign(secret);
   setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });
      return res.status(200).json({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
        city: user.city,
      });
   }
   return res.status(404).json({message:"Unknown Endpoint"})
}
