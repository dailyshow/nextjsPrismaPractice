// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'


export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if(req.method === 'GET'){
    const userProfile = await prisma.userProfile.findMany();
    res.status(200).json({ userName: userProfile })

  } else if(req.method === 'POST'){
    const {body: data} = req;
    
    const newUser = await prisma.userProfile.create({data});

    res.status(200).json({createStatus : 'ok'});
    return res.status(201).send(newUser);
  } else {
    
  }
}
