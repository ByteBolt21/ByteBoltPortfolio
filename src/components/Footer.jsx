// Footer.js

import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div
      className="bg-customDarkGray
            bg-[url('https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/bg_img.png')]   
            bg-cover bg-center 
            "
    >
      <section className="px-5 lg:px-32 bg-transparent  w-full relative ">
        <div
          className="  
          max-w-screen-xl mx-auto
          text-white
           md:w-full
          h-96 md:h-44
          border border-customDarkGray rounded-lg shadow-lg      
          bg-gradient-to-b from-customFirstGradient via-customSecondGradient to-customThirdGradient
          relative flex
          flex-col md:flex-row
          
          "
        >
          <div className="left w-full text-center md:text-start md:w-3/5 h-full px-6 ">
            <h1 className="text-4xl md:text-3xl lg:text-4xl text-white pt-5 font-extrabold">
              Newsletter
            </h1>
            <p className="text-xl lg:text-2xl text-white pt-5">
              Signup for our newsletter to get updated information, news,
              insights, or promotions.
            </p>
          </div>
          <div className="right w-full md:w-2/5 px-5 md:px-0 h-full flex flex-col justify-center">
            <div className="w-full md:w-1/2">
              <input
                className="block  w-72 lg:w-96 mb-1 text-white rounded-full
                                 bg-customGrayForEmail 
                                 py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                id="grid-email"
                type="email"
                placeholder="Email"
              />
            </div>
            <Button
              gradientColors={["pink-600", "pink-600", "customGradientPurple"]}
              text={"Sign up"}
              isGradient={true}
              width="96"
              icon={true}
            />
          </div>
        </div>
      </section>

      <div
        className="w-full h-64  flex
      flex-col md:flex-row
      justify-center items-center

      max-w-screen-xl mx-auto
      px-5 lg:px-0
      bg-transparent relative 
      pb-16
      "
      >
        <div className="footerLogoSection w-48 lg:w-72">
          <div className="flex justify-center align-middle items-center h-full">
            <a href="/">
              <img
                className="h-20 w-auto"
                src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/elementor/thumbs/logo_vittor-pre1buru2i302mjw5qnv2f7yo2wobdo35cmsgxyrcw.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="footerContentSection w-full text-white flex flex-col  justify-center">
          <div className="columns flex flex-wrap md:justify-end justify-center   border-b-2 border-customSlate pb-8">
            <div className="border-r-2 border-customSlate  px-4 md:px-2 lg:px-8 items-center flex-col">
              <h1 className="text-base md:text-lg lg:text-lg font-bold">
                About Us
              </h1>
            </div>
            <div className="border-r-2 border-customSlate px-4 md:px-2 lg:px-8 items-center flex-col">
              <h1 className="text-base md:text-lg lg:text-lg font-bold">
                Careers
              </h1>
            </div>
            <div className="border-r-2 border-customSlate px-4 md:px-2 lg:px-8 items-center flex-col">
              <h1 className="text-base md:text-lg lg:text-lg font-bold">
                Term of use
              </h1>
            </div>
            <div className="border-r-2 border-customSlate px-4 md:px-2 lg:px-8 items-center flex-col">
              <h1 className="text-base md:text-lg lg:text-lg font-bold">
                Privacy Policy
              </h1>
            </div>
            <div className="px-4 md:px-2 lg:pl-8 items-center flex-col">
              <h1 className="text-base md:text-lg lg:text-lg font-bold">
                Cookie Policy
              </h1>
            </div>
          </div>

          <div className="copyRightContent  text-center flex justify-end ">
            <p>
              Copyright © 2022 Vittor, All rights reserved. Powered by
              MoxCreative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
