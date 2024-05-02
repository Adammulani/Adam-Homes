import React from 'react'
import { useQuery } from 'react-query'
import { getAllProperties } from '../../utils/api.js';


export const useProperties = () => {

  const {data,isLoading,isError,refetch}=useQuery(
      "allProperties",   // this is the name/key
      getAllProperties,
      {refetchOnWindowFocus:false}
  );
  
  return {
    data,
    isError,
    isLoading,
    refetch,
  };
}
