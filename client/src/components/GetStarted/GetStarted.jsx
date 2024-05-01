import React from 'react'
import "./GetStarted.css"

export const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Get Started with Dream Homes</span>
          <span className='secondaryText'>Subscribe now for exclusive access to irresistible price quotes.
             Discover your new home today.</span>

             <button className="button">
                <a href="mailto:aadammulani12@gmail.com">Get Started</a>
             </button>
        </div>
      </div>
    </section>
  );
}
