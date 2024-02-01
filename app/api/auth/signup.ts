import {NextApiRequest,NextApiResponse} from 'next';




export default async function handler(req:NextApiRequest, res:NextApiResponse) {
   if(req.method === "POST"){

      res.status(200).json({
         hello:"message",
      });
   }
}
