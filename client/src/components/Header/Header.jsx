import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from '../ProfileMenu/ProfileMenu.jsx';
import { MantineProvider } from '@mantine/core';
const Header = () => {
  const [menuOpened,setMenuOpened]=useState(false);
  const {loginWithRedirect,isAuthenticated,user,logout}=useAuth0()

  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth <=800){
      return {right: !menuOpened && "-100%"}  //-100% means we are pushing element out of the view
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100}></img>
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:aadammulani12@gmail.com">Contact</a>

            {/* login button */}
            {
              !isAuthenticated?
              (<button className="button" onClick={loginWithRedirect}>
                Login
              </button> ):
              (
                /*<MantineProvider>
                    <ProfileMenu user={user} logout={logout}/>
                </MantineProvider>
             */
               <ProfileMenu user={user} logout={logout}/>
                //<div>User Profile</div>
               /* <button className="button" onClick={()=>{
                  localStorage.clear();
                  logout();
                }}>
                  Logout
                </button>*/
              )
            }
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header