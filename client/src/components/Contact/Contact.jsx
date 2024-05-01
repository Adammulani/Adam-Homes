import React from 'react';
import "./Contact.css";
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

export const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="greenText">Reach Out to Us</span>
          <span className="primaryText">Seamless Contact Experience</span>
          <span className="secondaryText">
            We're here to help! Whether you have questions, feedback, or
            inquiries,
            <br /> feel free to reach out to us using the contact information
            provided below.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
                {/*first mode of contact */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>8734547683</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Call Now
                </div>
              </div>

             {/*Second mode oc contact */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>8734547683</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Chat Now
                </div>
              </div>
            </div>

            {/*Second row */}
            <div className="flexStart row">
                {/*Third mode of contact */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Video Call</span>
                    <span className='secondaryText'>8734547683</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Video Call Now
                </div>
              </div>

             {/*Fourth mode oc contact */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>8734547683</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Message Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="c-right">
          <div className="image-container ">
            <img src="contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
