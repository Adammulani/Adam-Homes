import React from 'react'
import Header from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";

import { Companies } from "../components/Companies/Companies";
import { Residencies } from "../components/Residencies/Residencies";
import { Values } from "../components/Values/Values";
import { Contact } from "../components/Contact/Contact";
import { GetStarted } from "../components/GetStarted/GetStarted";
import { Footer } from "../components/Footer/Footer";

export const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
     <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Values/>
      <Contact/>
      <GetStarted/>
      <Footer/>
     
    </div>
  )
}
