import React from "react";

const CardWithIcon = ({ icon, text, paraText }) => {
  return (
    <div
      className="text-white 
    mx-1

    w-sm sm:w-md  lg:w-sm  
     p-6 border border-customDarkGray rounded-lg shadow-lg dark:border-customDarkGray text-center
     bg-gradient-to-b from-customFirstGradient via-customSecondGradient to-customThirdGradient
     "
    >
      {icon}
      <h5 className="mb-2 text-2xl font-semibold tracking-tight">{text}</h5>
      <p className="mb-3 font-normal">{paraText}</p>
    </div>
  );
};

export default CardWithIcon;
