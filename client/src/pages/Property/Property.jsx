import React from 'react'
import { useQuery } from 'react-query'
import {useLocation} from 'react-router-dom'
import { getProperty } from '../../utils/api';
import {PuffLoader} from 'react-spinners'
import { AiFillHeart, AiTwotoneCar } from 'react-icons/ai';
import {FaShower} from "react-icons/fa"
import {MdMeetingRoom, MdLocationPin} from 'react-icons/md'

import "./Property.css"
import { Map } from '../../components/Map/Map';

export const Property = () => {
    const {pathname} =useLocation();
    const id=pathname.split("/").slice(-1)[0];
    
    const {data,isLoading,isError}=useQuery(["resd",id],()=>getProperty(id))
    
    if(isLoading){
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <PuffLoader/>
                </div>
            </div>
        )
    }

    if(isError){
        return(
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <span>Error while fetching the property details</span>
                </div>
            </div>
        )
    }
  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/*  Add to favourite button */}
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>

        {/*image */}
        <img src={data?.image} alt="home imgae"></img>

        <div className="flexCenter property-details">
          {/* left side */}
          <div className="flexColStart left">
            {/*head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="greenText">₹ {data?.price}</span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              {/* Bathrooms facilities */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>

              {/* Parking facilities */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data?.facilities?.parkings} Parking</span>
              </div>

              {/* Room facilities */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.facilities?.bedrooms} Room/s</span>
              </div>
            </div>

            {/*description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/*address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}
                {data?.city}
                {data?.country}
              </span>
            </div>

            {/*booking button */}
            <button className="button">Book your visit</button>
          </div>

          {/*right side */}
          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
