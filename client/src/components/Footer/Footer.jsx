import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*left side */}
        <div className="flexColStart f-left">
          <img src="./logofooter.png" alt="" width={120} />
          <span className="secondaryText">
            Our mission is to help you find your dream home easily.
            <br />
            We're here to make your real estate experience simple,
            <br /> reliable, and rewarding.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Maharashtra, India</span>
          <div className="flexCenter f-menu">
            {/* <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
