import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency=asyncHandler(async(req,res)=>{
   const {title,description,price,address,city,country,image,facilities,userEmail}=req.body.data;

   console.log(req.body.data)

   try{
    const residency = await prisma.Residency.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner:{connect:{email:userEmail}},  //the userEmail we are receiving from payload, we are going to connect with our owner field, and owner field in return is connected with our user field, in the user collection
          //so the owner field will be connected with user collectionand will use email part as our sent email
      },
    });

    res.send({message:" Residency created successfully",residency})

   }catch(err){
    if(err.code==="P2002"){  //if condition of the unique address is violeted error code will be P2002
        throw new Error("A residency with address already there")
    }
    throw new Error(err.message);
   }
})

export const getAllResidencies=asyncHandler(async(req,res)=>{
    try{
           const residencies=await prisma.Residency.findMany({
            orderBy:{
                createdAt:"desc",
            },
           });

           res.send(residencies);
    }catch(error){
        console.log(error)
    }
})