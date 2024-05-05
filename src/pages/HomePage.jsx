import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/Button";

import CardWithAction from "../components/CardWithAction";
import CardWithLogo from "../components/CardWithLogo";
import CardWithTextAndIcon from "../components/CardWithTextAndIcon";
import SwiperComponent from "../components/swiper/swiper";
import Footer from "../components/Footer";
import { submitFormData } from "../utils/apis/formApi";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CardWithIcon from "../components/CardWithIcon";
import filmPlayIcon from "../assets/icons/film-play_1.svg";
import filmPlayIconPurple from "../assets/icons/film-play_1 Purple.svg";
import videoCameraIcon from "../assets/icons/video Camera.svg";
import videoCameraIconPurple from "../assets/icons/camera Purple.svg";
import cameraIcon from "../assets/icons/camera.svg";
import cameraIconPurple from "../assets/icons/camera Purple.svg";
import videoPlayIconOnImage from "../assets/icons/videoPlay.svg";

const HomePage = () => {
  const [displayImage, setDisplayImage] = useState(true);

  const toggleDisplay = () => {
    setDisplayImage(!displayImage);
  };

  useEffect(() => {
    const imageDiv = document.getElementById("imageDiv");
    const iframeDiv = document.getElementById("iframeDiv");

    if (imageDiv && iframeDiv) {
      imageDiv.style.display = displayImage ? "block" : "none";
      iframeDiv.style.display = displayImage ? "none" : "block";
    }
  }, [displayImage]);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phoneNumber: "",
    date: "",
    region: "basic",
    textArea: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await submitFormData(formData);
      console.log("Form submitted successfully!", response);

      // Clear form fields after successful submission
      setFormData({
        name: "",
        company: "",
        email: "",
        phoneNumber: "",
        date: "",
        region: "basic",
        textArea: "",
      });
      toast("Form Submitted Successfully!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Error submitting form. Please try again.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div>
      <Header />

      <main
        className='main 
        sm:h-oneThird90 md:h-oneHalf90 lg:h-90
          w-full
             bg-customBlendGray
             bg-[url("https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/male-video-editor-working-on-his-personal-computer-with-big-blank-display.jpg")]   
             bg-top sm:bg-cover sm:bg-center
             bg-blend-multiply
            '
      >
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="content max-w-screen-xl mx-auto flex w-full h-full flex-column">
          <div
            className="leftDiv sm:w-4/5 lg:w-3/5  h-full text-white  
                    pl-5 sm:pl-10     
                    sm:pr-10 md:pr-44      
                    pt-16 md:pt-24 lg:pt-40
                    border-white-950 "
          >
            <h1
              className=" text-5xl 
            sm:text-3xl md:text-5xl lg:text-7xl  font-bold  "
            >
              Bringing your ideas to life through motion
            </h1>
            <p className=" text-lg  lg:text-2xl pt-4">
              At our video production company, we know how important it is to
              get the perfect shot – for you and your clients.
            </p>
            <div className="h-32  mt-4">
              <Button
                gradientColors={[
                  "pink-600",
                  "pink-600",
                  "customGradientPurple",
                ]}
                isGradient={true}
                text={"Get Started"}
              />
            </div>
          </div>
          <div className="rightDiv  lg:w-2/5 h-full  text-white"> </div>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="  bg-customDarkGray w-full h-thirtyEight  sm:h-1/4     ">
          <section
            className="  max-w-screen-xl mx-auto 
                    flex  
                    flex-col sm:flex-row
                    justify-around sm:justify-between 
                    w-90  
                    px-2 sm:px-10 
                    h-thirtyEight sm:h-1/4 
                     sm:py-10 

                        "
          >
            <div className="-my-20 sm:-my-28  ">
              <CardWithIcon
                icon={
                  <img
                    src={filmPlayIcon}
                    alt="Video Play Icon"
                    className="w-full h-12 text-gray-500 dark:text-gray-400 mb-3"
                  />
                }
                text={"Video Editing"}
                paraText={
                  "Duis mattis porttitor tincidunt malesuada etiam aliquet mauris sit turpis neque sollicitudin"
                }
              />
            </div>
            <div className="-mt-0 sm:-my-28  ">
              <CardWithIcon
                icon={
                  <img
                    src={videoCameraIcon}
                    alt="Video Play Icon"
                    className="w-full h-12 text-gray-500 dark:text-gray-400 mb-3"
                  />
                }
                text={"Video Shot"}
                paraText={
                  "Duis mattis porttitor tincidunt malesuada etiam aliquet mauris sit turpis neque sollicitudin"
                }
              />
            </div>
            <div className="-mt-16 sm:-my-28 ">
              <CardWithIcon
                icon={
                  <img
                    src={cameraIcon}
                    alt="Video Play Icon"
                    className="w-full h-12 text-gray-500 dark:text-gray-400 mb-3"
                  />
                }
                text={"Video Director"}
                paraText={
                  "Duis mattis porttitor tincidunt malesuada etiam aliquet mauris sit turpis neque sollicitudin"
                }
              />
            </div>
          </section>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <section
          className="
        flex  
        flex-col lg:flex-row
        justify-between sm:justify-start lg:justify-between
        items-center 
        w-full
        h-90 sm:h-oneEighty  lg:h-full
         relative
         bg-customDarkGray 
         overflow-hidden"
        >
          <div
            className="leftDiv 
          w-full lg:w-8/12 
           max-w-screen-md
            mx-auto
            h-66 lg:h-full
               flex-col
                align-middle
                 text-left
                 py-10 lg:py-32
                 pl-5  sm:pl-10 2xl:pl-32
                 pr-5 sm:pr-0
                 "
          >
            <h2 className="text-customhoverPink">WHO WE ARE</h2>
            <h1
              className="
            text-2xl  sm:text-3xl md:text-3xl lg:text-5xl   
             text-white pt-5 sm:pr-32 font-extrabold leading-tight"
            >
              Video production that’s creative and affordable.
            </h1>
            <p
              className="
             sm:text-base text-white sm:pr-60 pt-5 font-normal"
            >
              Nunc ridiculus efficitur inceptos felis lectus. Odio iaculis cras
              sem magnis interdum. Augue a maximus libero commodo diam euismod
              laoreet faucibus himenaeos rutrum.
            </p>
            <div className="pt-7">
              <Button
                gradientColors={[
                  "pink-600",
                  "pink-600",
                  "customGradientPurple",
                ]}
                isGradient={true}
                text={"Discover More"}
              />
            </div>
            {/* ............/ NEON */}
            <div className="hidden lg:block w-full h-80 -mt-16  ">
              <img
                src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/img_memphis2.png"
                alt="Video Play"
                className="h-60 w-60 absolute left-0 top-90  opacity-40"
              />
            </div>
          </div>

          <div
            className="rightDiv
            
           py-0  lg:py-24
           w-full lg:w-2/6
           h-96 sm:h-oneThird90 lg:h-full
              overflow-hidden"
          >
            <div
              id="mediaContainer"
              className={`
              lg:pl-16 
              lg:py-4
              h-72 sm:h-96 lg:h-auto
               w-80 sm:w-2/3 lg:w-1/2
                 absolute 
                 lg:left-3/4 lg:top-1/2 

                 left-5 top-1/2 
                 sm:left-10 sm:top-80 
                 mt-4 sm:mt-12 lg:mt-0

                  lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 ${
                    displayImage ? "block" : "none"
                  }`}
              onClick={toggleDisplay}
            >
              {displayImage ? (
                <div>
                  <img
                    className="border-8 border-customSlate  
                    rounded-xl relative "
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/male-videographer-edits-and-cuts-footage-and-sound-on-his-person-1.jpg"
                    alt="Videographer"
                    width="590"
                    height="415"
                  />
                  <img
                    src={videoPlayIconOnImage}
                    alt="play pause icon"
                    className="absolute 
                    left-1/2 top-28 transform -translate-x-1/2 -translate-y-1/2
                    sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2
                    md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2
                    lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2
                    
                    2xl:translate-x-0  2xl:left-80"
                  />
                </div>
              ) : (
                <iframe
                  className="border-8 border-customSlate rounded-xl"
                  title="YouTube Video"
                  width="560"
                  height="400"
                  src="https://www.youtube.com/embed/XHOmBV4js_E?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fnewkit.moxcreative.com&widgetid=1"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div
              className="lg:py-10
              h-60 sm:h-96  lg:h-3/4
              w-full sm:w-full lg:w-1/2 
              rounded-xl 
              lg:bg-cover lg:bg-center
               bg-center bg-cover
               bg-[url('https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/milky-way-and-mountains-night-landscape-1536x1053.jpg')] 
              absolute 
             left-32 sm:left-72 lg:left-2/3

              "
            ></div>
          </div>
          {/* ............/ NEON */}
          <div className="lg:hidden  w-full h-80 -mt-16  ">
            <img
              src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/img_memphis2.png"
              alt="Video Play"
              className="h-40 w-40 sm:h-48 sm:w-60 absolute left-0 top-90  opacity-40"
            />
          </div>
        </section>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="w-full bg-customDarkGray">
          <section className="flex max-w-screen-xl mx-auto flex-col justify-center items-center px-4 md:px-8 lg:px-16 xl:px-32 bg-customDarkGray w-full h-44">
            <h2 className="text-customhoverPink text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              WHAT WE OFFER
            </h2>
            <p
              className="px-4 sm:px-8 md:px-16 lg:px-32 
            text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl
             text-white
              pt-5 pr-4 sm:pr-8 
               font-extrabold leading-tight text-center"
            >
              Video is the future of communication
            </p>
          </section>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="w-full bg-customDarkGray">
          {/* <section className="grid grid-cols-3 gap-8   max-w-screen-xl mx-auto px-16 2xl:px-10   pt-10 pb-32 bg-customDarkGray"> */}
          <section
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 max-w-screen-xl mx-auto
           px-4 sm:px-2 md:px-4 lg:px-32 2xl:px-10 
           pt-10 pb-32 bg-customDarkGray"
          >
            <CardWithAction
              icon={
                <div className="w-full h-28   flex justify-center items-end -    ">
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/elementor/thumbs/9-prf96eybk70m668w322ugrr3t3uw30k66xkasql6v4.png"
                    alt="Video Play Icon"
                    className=" w-16 h-20 -  text-gray-500 dark:text-gray-400 mb-3"
                  />
                </div>
              }
              text={"Video Editing"}
              paraText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
            />
            <CardWithAction
              icon={
                <div className="w-full h-28   flex justify-center items-end -    ">
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/elementor/thumbs/7-prf96e0hdczbuka98jo7w9zn7pzivbgfuswtbgml1c.png"
                    alt="Video Play Icon"
                    className=" w-16 h-16  text-gray-500 dark:text-gray-400 mb-3"
                  />
                </div>
              }
              text={"Video Shot"}
              paraText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
            />
            <CardWithAction
              icon={
                <div className="w-full h-28   flex justify-center items-end -    ">
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/elementor/thumbs/4-prf96c4szowr7cczjiuyragq0y8sfx8z6jlucwpdds.png"
                    alt="Video Play Icon"
                    className=" w-24 h-16 text-gray-500 dark:text-gray-400 mb-3"
                  />
                </div>
              }
              text={"Video Director"}
              paraText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
            />
            <CardWithAction
              icon={
                <div className="w-full h-28   flex justify-center items-end -    ">
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/elementor/thumbs/Asset-11-prgjn5kntavd8ihzglwq75skr94z427x68294oefwg.png"
                    alt="Video Play Icon"
                    className=" w-24 h-16 text-gray-500 dark:text-gray-400 mb-3"
                  />
                </div>
              }
              text={"Video Editing"}
              paraText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
            />
            <CardWithAction
              icon={
                <div className="w-full h-28   flex justify-center items-end -    ">
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/elementor/thumbs/2-prf96c4szowr7cczjiuyragq0y8sfx8z6jlucwpdds.png"
                    alt="Video Play Icon"
                    className=" w-16 h-16 text-gray-500 dark:text-gray-400 mb-3"
                  />
                </div>
              }
              text={"Video Shot"}
              paraText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
            />
            <CardWithAction
              icon={
                <div className="w-full h-28   flex justify-center items-end -    ">
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/elementor/thumbs/5-prf96d2n6iy1iybme19lbs86mc45nmcpio9bu6nz7k.png"
                    alt="Video Play Icon"
                    className=" w-24 h-16 text-gray-500 dark:text-gray-400 mb-3"
                  />
                </div>
              }
              text={"Video Director"}
              paraText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
            />
          </section>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <section
          className=' main 
           
          h-sixtyRem md:h-fiftyRem lg:h-90
            w-full
                     bg-[url("https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/back-view-of-young-man-watching-graphs-on-monitors.jpg")]   
                     bg-cover bg-center
                     bg-customBlendGray
                     bg-blend-darken 
                       relative 

                    '
        >
          <div
            className="flex
            max-w-screen-xl
            mx-auto
            relative 
            justify-between sm:justify-between md:justify-between lg:justify-between  
            flex-col sm:flex-col md:flex-col lg:flex-row  
            px-4 sm:px-4 md:px-4 lg:px-10  
            items-center sm:items-center md:items-center lg:items-center  
            w-full sm:w-full md:w-full lg:w-full  
            h-72 sm:h-72 md:h-72 lg:h-90    

            "
          >
            <div
              className="w-full  h-full  flex-col align-middle text-left 
            pt-16  lg:py-32
            "
            >
              <h1
                className="
              text-2xl md:text-4xl lg:text-5xl  
                  text-white 
                  pt-0  lg:pt-5
                    font-extrabold leading-tight"
              >
                Trusted by 30,000 world-class brands and organizations of all
                sizes
              </h1>
              <p
                className="text-base text-white 
              lg:pr-60
               pt-5 font-normal"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div
              className="grid 

             gap-y-2 gap-x-2 lg:gap-x-0 lg:gap-y-2 
             py-5 sm:py-5    md:py-5 lg:py-28  
             grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3

            w-full
             lg:h-full  "
            >
              <CardWithLogo
                icon={
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/Logo-Auzora.png"
                    alt="Icon"
                    className="w-18 h-16 text-gray-500   dark:text-gray-400 mb-3"
                  />
                }
              />
              <CardWithLogo
                icon={
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/logo_astronefty.png"
                    alt="Icon"
                    className="w-18 h-12 text-gray-500   dark:text-gray-400 mb-3"
                  />
                }
              />
              <CardWithLogo
                icon={
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/logo_amerta_w.png"
                    alt="Icon"
                    className="w-18 h-16 text-gray-500   dark:text-gray-400 mb-3"
                  />
                }
              />
              <CardWithLogo
                icon={
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/logo_autorent_w.png"
                    alt="Icon"
                    className="w-18 h-16 text-gray-500   dark:text-gray-400 mb-3"
                  />
                }
              />
              <CardWithLogo
                icon={
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/Logo_aventoura_w.png"
                    alt="Icon"
                    className="w-18 h-12 text-gray-500   dark:text-gray-400 mb-3"
                  />
                }
              />
              <CardWithLogo
                icon={
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/Logo-Byta.png"
                    alt="Icon"
                    className="w-18 h-16 text-gray-500   dark:text-gray-400 mb-3"
                  />
                }
              />
              <CardWithLogo
                icon={
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/logo-bikepro_.png"
                    alt="Icon"
                    className="w-18 h-16 text-gray-500   dark:text-gray-400 mb-3"
                  />
                }
              />
              <CardWithLogo
                icon={
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/Logo_buzzkit_w.png"
                    alt="Icon"
                    className="w-18 h-16 text-gray-500   dark:text-gray-400 mb-3"
                  />
                }
              />

              <CardWithLogo
                icon={
                  <img
                    src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/logo_centrix.png"
                    alt="Icon"
                    className="w-18 h-16 text-gray-500   dark:text-gray-400 mb-3"
                  />
                }
              />
            </div>
          </div>
        </section>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="w-full bg-customDarkGray">
          <section
            className="px-5 lg:px-10  max-w-screen-xl mx-auto h-96 md:h-52
          
          md:w-full lg:w-full bg-customDarkGray"
          >
            <div
              className="-mt-36 md:-mt-28 w-full z-10 text-white h-80 md:h-44 p-6 border border-customDarkGray rounded-lg shadow-lg dark:border-customDarkGray text-center relative
              md:flex  md:flex-row items-center justify-center
              grid  grid-cols-2 
   "
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255, 255, 255, 0.022), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
              }}
            >
              <div className="md:border-r-2 border-customSlate px-6 md:px-16 items-center flex-col md:w-1/4">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold">
                  14K+
                </h1>
                <p className="text-sm lg:text-md">HAPPY CLIENTS</p>
              </div>
              <div className="md:border-r-2 border-customSlate px-6 md:px-16 items-center flex-col md:w-1/4">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold">
                  17K+
                </h1>
                <p className="text-sm lg:text-md">PROJECT DONE</p>
              </div>
              <div className="md:border-r-2 border-customSlate px-6 md:px-16 items-center flex-col md:w-1/4">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold">
                  4.7+
                </h1>
                <p className="text-sm lg:text-md">REVIEW CUSTOMER</p>
              </div>
              <div className="px-6 md:px-16 items-center flex-col md:w-1/4">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold">
                  20+
                </h1>
                <p className="text-sm lg:text-md">YEARS EXPERIENCE</p>
              </div>
            </div>
          </section>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="w-full bg-customDarkGray">
          <section
            className="flex max-w-screen-xl mx-auto flex-col  justify-center items-center  
                 lg:bg-[url('https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/bg_header.png')]   
                 bg-cover bg-top 
                w-full h-64 relative"
          >
            <h2 className="text-customhoverPink  ">WHY CHOOSE US</h2>
            <p
              className="
             text-2xl md:text-3xl lg:text-5xl
             text-white 
             pt-5 
              lg:px-64 
             font-extrabold  text-center w-full flex justify-center  items-center"
            >
              We make your business look good.
            </p>
          </section>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="w-full bg-customDarkGray">
          <section
            className="grid  grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 max-w-screen-xl mx-auto 
                    
                    px-5 lg:px-10  pb-32 "
          >
            <CardWithTextAndIcon
              icon={
                <div className=" flex justify-center items-center    ">
                  <img
                    src={cameraIconPurple}
                    alt="Video Play Icon"
                    className=" lg:w-16 lg:h-12   text-gray-500 dark:text-gray-400 mb-3"
                  />
                </div>
              }
              text="Video Editing"
              paraText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
              bg="customGrayForCard"
            />

            <div className="z-10">
              <CardWithTextAndIcon
                icon={
                  <div className=" flex justify-center items-center    ">
                    <img
                      src={videoCameraIconPurple}
                      alt="Video Play Icon"
                      className=" w-16 h-12   text-gray-500 dark:text-gray-400 mb-3"
                    />
                  </div>
                }
                text={"Video Editing"}
                paraText={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                }
                bg={"customGrayForCard"}
              />
            </div>

            <CardWithTextAndIcon
              icon={
                <div className=" flex justify-center items-center    ">
                  <img
                    src={filmPlayIconPurple}
                    alt="Video Play Icon"
                    className=" w-16 h-12   text-gray-500 dark:text-gray-400 mb-3"
                  />
                </div>
              }
              text={"Video Editing"}
              paraText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
              bg={"customGrayForCard"}
            />

            <CardWithTextAndIcon
              icon={
                <div className=" flex justify-center items-center    ">
                  <img
                    src={filmPlayIconPurple}
                    alt="Video Play Icon"
                    className=" w-16 h-12   text-gray-500 dark:text-gray-400 mb-3"
                  />
                </div>
              }
              text={"Video Editing"}
              paraText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              }
              bg={"customGrayForCard"}
            />
          </section>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div
          className="w-full p-2   md:h-full lg:h-full bg-customDarkGray
                 bg-[url('https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/bg_img.png')]   
                 bg-cover bg-center  
                     
                "
        >
          <section
            className="
            flex
            flex-col md:flex-row
            justify-center md:justify-between  
            w-full max-w-screen-xl mx-auto 
            h-seventyRem md:h-full lg:h-full sm:px-5 sm:py-0 lg:p-10 
            items-center relative overflow-hidden  "
          >
            <div
              className="left w-full md:w-9/12  lg:w-8/12  h-eightyRem md:h-full  flex-col align-middle text-left  
            px-5 md:px-0
            py-16 lg:py-32 "
            >
              <h2 className="text-customhoverPink">HOW TO ORDER</h2>
              <h1 className="md:text-3xl lg:text-5xl text-white pt-5  font-extrabold leading-tight">
                Bringing your ideas to life through motion.
              </h1>
              <p className="text-base text-white pr-0 sm:pr-0 md:pr-0 lg:pr-60 pt-5 font-normal">
                Rutrum orci mauris diam ligula senectus nulla rhoncus vivamus
                nec. Vivamus cubilia libero tempus potenti natoque faucibus
                ullamcorper mauris ultrices.
              </p>
              <div className="pt-7">
                <Button
                  gradientColors={[
                    "pink-600",
                    "pink-600",
                    "customGradientPurple",
                  ]}
                  isGradient={true}
                  text={"Discover More"}
                />
              </div>
            </div>

            <div
              className="flex-col md:pl-16 lg:pl-0
            
            h-90 md:h-full"
            >
              <div className="mx-1 mb-3 ">
                <CardWithTextAndIcon
                  icon={
                    <div className=" flex justify-center items-center    ">
                      <img
                        src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/elementor/thumbs/3-prf95mr5v5y0hvdunpw1dyv9zjpvo3g831zqefr01s.png"
                        alt="Video Play Icon"
                        className=" w-16 h-16 lg:w-28 lg:h-20   text-gray-500 dark:text-gray-400 mb-3"
                      />
                    </div>
                  }
                  text={"Consultations"}
                  paraText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                  }
                />
              </div>
              <div className="mx-1 mb-3 ">
                <CardWithTextAndIcon
                  icon={
                    <div className=" flex justify-center items-center    ">
                      <img
                        src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/elementor/thumbs/9-prf96eybk70m668w322ugrr3t3uw30k66xkasql6v4.png"
                        alt="Video Play Icon"
                        className="w-16 h-16 lg:w-28 lg:h-20   text-gray-500 dark:text-gray-400 mb-3"
                      />
                    </div>
                  }
                  text={"Choose Package"}
                  paraText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                  }
                />
              </div>
              <div className="mx-1 mb-3 ">
                <CardWithTextAndIcon
                  icon={
                    <div className=" flex justify-center items-center    ">
                      <img
                        src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/elementor/thumbs/5-prf96d2n6iy1iybme19lbs86mc45nmcpio9bu6nz7k.png"
                        alt="Video Play Icon"
                        className="w-16 h-16 lg:w-28 lg:h-20    text-gray-500 dark:text-gray-400 mb-3"
                      />
                    </div>
                  }
                  text={"Get your video"}
                  paraText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                  }
                />
              </div>
            </div>

            {/* <div className="absolute bottom-0 left-0 h-full w-full z-0">
                        <img
                            src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/bg_img.png"
                            alt="Neon effect"
                            className="h-full w-full object-cover"
                        />
                    </div> */}
          </section>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div
          className="w-full h-oneThird90 md:h-4/5 
                
                bg-[url('https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/changing-camera-lens-aperture.jpg')]   
                bg-cover bg-center
                bg-customDarkGray
                   bg-opacity-70
                bg-blend-overlay
                "
        >
          <section
            className="flex flex-col  items-center justify-center 
                   max-w-screen-xl mx-auto
                text-center
                w-full 
                h-oneThird90
                lg:h-4/5 "
          >
            <h2 className="text-customhoverPink">BOOKING ONLINE</h2>
            <p className="text-xl md:text-3xl lg:text-5xl text-white pt-5  font-extrabold  justify-center w-full flex items-center ">
              Schedule An Appointment
            </p>
            <p className="text-base  text-white px-5 px-10 lg:px-80 pt-5 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              veniam quisquam sapiente, suscipit rerum ducimus aut officia
            </p>
          </section>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div
          className="w-full h-dvh md:h-3/4 lg:h-2/3
                 bg-repeat  
                 px-5 lg:px-0
                 y-10
                 bg-blend-normal
                 bg-customDarkGray
                 bg-[url('https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/img_memphis.png')]   

                 "
        >
          <section
            className=" relative w-full h-dvh md:h-2/3
                 max-w-screen-xl mx-auto
                 flex
                justify-center items-center"
          >
            <form
              className=" absolute left-50 -top-10 md:-top-32 bg-gradient-to-b from-customFirstGradient via-customSecondGradient to-customThirdGradient rounded-lg px-8 py-8
                        
                        w-full lg:w-3/5 shadow-lg text-white"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap -mx-3 mb-1">
                {" "}
                {/* Adjusted margin-bottom to mb-4 */}
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  {" "}
                  {/* Adjusted margin-bottom to mb-4 */}
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Company
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                {" "}
                {/* Adjusted margin-bottom to mb-4 */}
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  {" "}
                  {/* Adjusted margin-bottom to mb-4 */}
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-phone"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                {" "}
                {/* Adjusted margin-bottom to mb-4 */}
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  {" "}
                  {/* Adjusted margin-bottom to mb-4 */}
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-date"
                  >
                    Date
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    type="date"
                    placeholder="Date"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase w-full text-white text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    Package
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="region"
                      value={formData.region}
                      onChange={handleChange}
                    >
                      <option value="Basic">Basic</option>
                      <option value="Premium">Premium</option>
                      <option value="Luxury">Luxury</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                {" "}
                {/* Adjusted margin-bottom to mb-4 */}
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-message"
                  >
                    Message
                  </label>
                  <textarea
                    className="textarea block h-28 w-full text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="textArea"
                    value={formData.textArea}
                    onChange={handleChange}
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <Button
                gradientColors={[
                  "pink-600",
                  "pink-600",
                  "customGradientPurple",
                ]}
                text={"Book Now"}
                isGradient={true}
                width={"full"}
                type="submit"
              />
              <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </form>
          </section>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="h-90 bg-customDarkGray relative ">
          <section
            className="w-full relative h-90
    max-w-screen-xl mx-auto"
          >
            <div className=" absolute top-0 left-32  h-80   ">
              <img
                src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/img_memphis2.png"
                alt="GradientPng"
                className="h-28 w-24   opacity-40"
              />
            </div>
            <div className="flex flex-col justify-center items-center  lg:px-32  bg-customDarkGray w-full h-44">
              <h2 className="text-customhoverPink  ">TESTIMONIAL</h2>
              <p className=" text-2xl md:text-3xl lg:text-5xl text-white pt-5  font-extrabold  text-center w-full flex justify-center  items-center">
                What they say
              </p>
            </div>
            <SwiperComponent SLIDES="3" />
          </section>
          <div className=" absolute top-72  right-0  h-80   ">
            <img
              src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/2022/07/img_memphis2.png"
              alt="Video Play Icon"
              className="h-64 w-64  opacity-40"
            />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
