import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

//function to create residency
export const createResidency=asyncHandler(async(req,res)=>{
   const {title,description,price,address,city,country,image,facilities,userEmail}=req.body.data;

   console.log(req.body.data)

   try{
    const residency = await prisma.residency.create({
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


//function to get all the residencies
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

//function to get a specific document/residency
export const getResidency=asyncHandler(async(req,res)=>{
    const {id}=req.params;

    try{
        const residency=await prisma.Residency.findUnique({
            where:{id}  //or we can also write where:{id:id}
        })
        res.send(residency);

    }
    catch(error){
        throw new Error(error.message);

    }
})