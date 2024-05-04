import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-4kbys46e12vbytul.us.auth0.com"
    clientId="3CQpZPdX8PHPFuVeMpmiUunAFMhVkEGW"
    authorizationParams={{
      redirect_uri:"http://localhost:5173"

    }}
    audience="http://localhost:3001"
    scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
