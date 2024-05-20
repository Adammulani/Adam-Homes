import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/userDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import { useFavourites } from "../hooks/useFavourites";
import { useBookings } from "../hooks/useBookings";

export const Layout = () => {

  useFavourites()
  useBookings()
  
  const { isAuthenticated, user, getAccessTokenSilently,getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email,token),
  });

  useEffect(() => {

    const checkPopupPermission = () => {
      if (window && window.document && window.document.createElement) {
        const popup = window.open('', '', 'width=100,height=100');
        if (!popup || popup.closed || typeof popup.closed === 'undefined') {
          // Popup blocked
          window.alert("To access the website, please enable pop-ups. This is crucial for the Auth0 authentication process. Failure to allow pop-ups will restrict your access to the website's features since JWT check is assigned to each route.");
        } else {
          // Popup allowed
          popup.close();
        }
      } else {
        console.error('Popup permission check failed: Window or document object not found.');
      }
    };

    
    const getTokenAndRegister = async () => {

      const res = await getAccessTokenWithPopup({
        authorizationParams: {
          audience: "http://localhost:3001",
          scope: "openid profile email",
          prompt:"none"
        },
      });
      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));
     mutate(res)
    };

  
      isAuthenticated && getTokenAndRegister();
      checkPopupPermission();
  }, [isAuthenticated]);
  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
