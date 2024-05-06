import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./UploadImage.css"
import { Button, Group } from "@mantine/core";

export const UploadImage = ({
  prevStep,
  nextStep,
  propertyDetails,
  setPropertyDetails,
}) => {
  const [imageURL, setImageURL] = useState(propertyDetails.image);
  const cloudinaryRef=useRef();
  const widgetRef=useRef();

  const handleNext=()=>{
    setPropertyDetails((prev)=>({
        ...prev,image:imageURL
    }))

    nextStep()
  }

  useEffect(()=>{
    cloudinaryRef.current=window.cloudinary;
    widgetRef.current=cloudinaryRef.current.createUploadWidget(
        {
            cloudName:"doe4qy15i",
            uploadPreset:"ocjqorln",
            maxFiles:1,
        },
        (err,result)=>{
            if(result.event==="success"){
                setImageURL(result.info.secure_url)   //if result is success then we need the url of the uploaded image
            }
        }
    )
  },[])

  return (
    <div className="flexColCenter uploadWrapper">
      {!imageURL ? (
        <div className="flexColCenter uploadZone"
        onClick={()=>widgetRef.current?.open()}>
          <AiOutlineCloudUpload size={50} color="grey" />
          <span>Upload Image</span>
        </div>
      ) : (
        <div className="uploadedImage"
        onClick={()=>widgetRef.current?.open()}>
          <img src={imageURL} alt="" />
        </div>
      )}

<Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep} >
            Back
        </Button>

        <Button onClick={handleNext} disabled={!imageURL}>
            Next
        </Button>

      </Group>
    </div>
  );
};
