import React from 'react'
import { Swiper,SwiperSlide,useSwiper } from 'swiper/react'
import "swiper/css"
import "./Residencies.css"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import { LuArrowLeftCircle,LuArrowRightCircle  } from "react-icons/lu";
import { PropertyCard } from '../PropertyCard/PropertyCard'

export const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Top picks</span>
          <span className="primaryText">Trending Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
            <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
                <PropertyCard card={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const SliderButtons=()=>{
    const swiper=useSwiper();
    return (
      <div className="flexCenter r-buttons">
        <button onClick={()=> swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
      </div>
    );
}
