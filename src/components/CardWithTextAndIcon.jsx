import React from "react";

const CardWithTextAndIcon = ({ icon, text, paraText, bg }) => {
  const defaultBgColor =
    "  bg-gradient-to-b from-customFirstGradient via-customSecondGradient to-customThirdGradient";
  const containerStyle = bg ? `bg-${bg}` : `bg-${defaultBgColor}`;

  return (
    <div
      className={`
     flex 
     flex-col md:flex-row
     justify-center align-middle items-center
    border-2
     lg:w-full
     text-white p-6
      lg:h-44
     rounded-lg shadow-lg dark:border-customDarkGray text-center ${containerStyle}`}
    >
      <div className="w-32 lg:w-auto px-3 lg:px-3">{icon}</div>
      <div className="items-center justify-center align-middle flex-col text-start">
        <h5 className=" mb-2 text-center md:text-start sm:w-full md:w-70 lg:w-96 md:text-xl lg:text-2xl font-semibold tracking-tight">
          {text}
        </h5>
        <p className="mb-3 text-center md:text-start font-normal">{paraText}</p>
      </div>
    </div>
  );
};

export default CardWithTextAndIcon;
