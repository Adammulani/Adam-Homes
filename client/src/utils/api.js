import axios from "axios";
import dayjs from 'dayjs';
import {toast} from 'react-toastify';

export const api = axios.create({
    baseURL:"http://localhost:3001/api/v1",
})

export const getAllProperties=async()=>{
    try{
        const response=await api.get("/residency/allresd",{
            timeout:10*1000,
        });

        if(response.status===400 || response.status===500){
            throw response.data
        }
        return response.data
    }catch(error){
        toast.error("Something went wrong")
        throw error
    }

}

export const getProperty=async(id)=>{
    try{
        const response=await api.get(`/residency/${id}`,{
            timeout:10*1000,
        });

        if(response.status===400 || response.status===500){
            throw response.data
        }
        return response.data
    }catch(error){
        toast.error("Something went wrong")
        throw error
    }

}

export const createUser = async (email, token) => {
  try {
    await api.post(
      "/user/register",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please try again later");
    throw error;
  }
};

export const bookVisit=async(date,propertyId,email,token)=>{
  try{

    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id:propertyId,
        date:dayjs(date).format("DD/MM/YYYY")
      },
      {
        headers:{
          Authorization:`Bearer ${token}`,
        }
      }
    )

  }catch(error){
    toast.error("An unexpected error occurred")
    throw error
  }
}

//remove booking
export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/user/removeBooking/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("An unexpected error occurred");
    throw error;
  }
};

//toFav function
export const toFav=async(id,email,token)=>{
  try{

   api.post( `/user/toFav/${id}`,
    {
      email,
    },
    {
      headers:{
        Authorization:`Bearer ${token}`,
      },
    })

  }catch(err){
    throw err;
  }
}

export const getAllFav=async (email,token)=>{
  if(!token) return

  try{
    const res=await api.post(
      `/user/allFav`,
      {
        email,
      },
      {
        headers:{
          Authorization:`Bearer ${token}`,
        },
      }
    )

    return res.data["favResidenciesID"];

  }catch(err){
    toast.error("Error occured while fetching favourites")
    throw err

  }
}


//fetch all bookings of user from db
export const getAllBookings=async(email,token)=>{

  if(!token) return

  try{
    const res=await api.post(
      `/user/allBookings`,
      {
        email,
      },
      {
        headers:{
          Authorization:`Bearer ${token}`,
        }
      },
    )
   
    return res.data["bookVisits"];

  }catch(error){
    toast.error("Error while fetching bookings")
    throw error
  }
}