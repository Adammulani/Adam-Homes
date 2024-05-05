import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";


//create user/register user
export const createUser = asyncHandler(async (req, res) => {
  console.log("creating a user");


  const { email } = req.body;

  try{
    const userExists = await prisma.user.findUnique({ where: { email: email } }); // In usr collection it is finding a unique document where email matches

    if (!userExists) {
      //if user does not exist need to register
  
      const user = await prisma.user.create({ data: req.body }); //created user document inside the user collection
      res.status(201).json({
        message: "User registered successfully",
        user: user,
      });
    } else {
     // res.status(400).json({ message: "User already registered" });
    }
  }
  catch(error){
    console.log(error);
    res.status(400).json({
        message:error.message,
    })
  }
 
});


//function to book a visit to residency
export const bookVisit=asyncHandler(async(req,res)=>{
  const {email,date}=req.body
  const {id}=req.params

  try{
      const alreadyBooked=await prisma.User.findUnique({
          where:{email},
          select:{bookVisits:true},        
      })

      if(alreadyBooked.bookVisits.some((visit)=>visit.id===id)){
        res.status(400).json({message:" This residency is already booked by you"})
      }
      else{
        await prisma.User.update({
          where:{email:email},
          data:{
            bookVisits:{push:{id,date}}
          }

        })
        res.send(" Your visit is booked successfully");
      }
     
  }
catch(err){
  throw new Error(err.message)
}

})


//function to get all the bookings done by user
export const getAllBookings=asyncHandler(async(req,res)=>{
  const {email}=req.body;
  try{
     const bookings=await prisma.user.findUnique({
      where:{email},
      select:{bookVisits:true}    //only select booked visits field, not the whole document
     })
     res.status(200).send(bookings);

  }
  catch(error){
    throw new Error(error.message);

  }
})

//function to cancle the booking
export const cancleBooking=asyncHandler(async(req,res)=>{
  const {email}=req.body;
  const {id}=req.params;

  try{
    //following line will return the bookVisits array
    const user=await prisma.user.findUnique({
      where:{email:email},
      select:{bookVisits:true}
    })

    //now get the index of id in the bookVisits array
    const index=user.bookVisits.findIndex((visit)=>visit.id===id)

    if(index===-1){
      res.status(404).json({message:"Booking not found"})
    }
    else{
      user.bookVisits.splice(index,1)    //in user.bookVisits array whose index matches with that we have found delete that element, still no change in user collection
      await prisma.user.update({
        where:{email},
        data:{
          bookVisits:user.bookVisits    //update it's bookVisits array with the updated instance of the bookVisits array
        }  
      })
      res.send("Booking cancelled successfully")
    }
    

  }
  catch(error){
    throw new Error(error.messag )
  }
})

//function to add a residency in a favourite list of a user
export const toFav=asyncHandler(async(req,res)=>{
  const {email}=req.body;
  const {rid}=req.params;

  try{
       const user=await prisma.user.findUnique({
        where:{email}
       })

       if(user.favResidenciesID.includes(rid)){
        const updateUser=await prisma.user.update({
          where:{email},
          data:{
            favResidenciesID:{
              set:user.favResidenciesID.filter((id)=>id!==rid)
            }
          }

        })
        res.send({message:"Removed from favourites",user:updateUser})
       }
       else{
        const updateUser=await prisma.user.update({
           where:{email},
           data:{
             favResidenciesID:{
              push:rid
             }
           }
        })
        res.send({message:"updated favourites",user:updateUser})
       }
  }catch(error){
    throw new Error(error.message);
  }
})

//function to get  of all fav residencies
export const getAllFavourites=asyncHandler(async(req,res)=>{

  const {email}=req.body

  try{
    const allFavResd=await prisma.user.findUnique({
      where:{email:email},
      select:{favResidenciesID:true}
    })
  
    res.status(200).send(allFavResd)
  }
  catch(err){
    throw new Error(err.message)
  }
})