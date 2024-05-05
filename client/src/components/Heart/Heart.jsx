import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useAuthCheck } from '../hooks/useAuthCheck'
import UserDetailContext from '../../context/userDetailContext'
import { useMutation } from 'react-query'
import { toFav } from '../../utils/api.js'
import { checkFavourites, updateFavourites } from '../../utils/common.js'
import { useAuth0 } from '@auth0/auth0-react'

export const Heart = ({id}) => {
    const [heartColor,setHeartColor]=useState("white")
    const {validateLogin}=useAuthCheck()
    const {user}=useAuth0()

    const{userDetails:{favourites,token},setUserDetails}=useContext(UserDetailContext);

    const {mutate}=useMutation({
        mutationFn:()=>toFav(id,user?.email,token),
        onSuccess:()=>{
            setUserDetails((prev)=>(
                {
                    ...prev,
                    favourites:updateFavourites(id,prev.favourites)
                }
            ))
        }
    })

    useEffect(()=>{
        setHeartColor(()=>checkFavourites(id,favourites))
    },[favourites])

    const handleLike=()=>{
        if(validateLogin())
            {
                mutate()
                setHeartColor((prev)=>prev==="#fa3e5f" ? "white" : "#fa3e5f")
            }
    }
  return (
     <AiFillHeart size={24} color={heartColor} onClick={(e)=>{
        e.stopPropagation()
        handleLike()
     }}/>
  )
}
