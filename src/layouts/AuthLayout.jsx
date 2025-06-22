import React from "react";
import {  Outlet } from "react-router";
import authImage from '../assets/authImage.png'
import ProFastLogo from "../pages/shared/ProFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200">
       

        <ProFastLogo></ProFastLogo>
      
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="flex-1">
            <img
          src={authImage}
          className=" "
        />
        </div>
        <div className="flex-1">
       <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
