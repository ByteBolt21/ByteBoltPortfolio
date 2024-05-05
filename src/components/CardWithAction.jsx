import React from "react";
import Button from "./Button";

const CardWithAction = ({ icon, text, paraText }) => {
  return (
    <div
      className="text-white 
    max-w-lg
     w-full  
     h-80 sm:h-80 md:h-96 lg:h-80
       px-3
        py-6
         border-2
          border-customSlate     rounded-lg shadow-lg dark:border-customDarkGray text-center
          bg-gradient-to-b from-customFirstGradient via-customSecondGradient to-customThirdGradient
          "
    >
      {icon}
      <h5 className="mb-2 text-2xl font-semibold tracking-tight">{text}</h5>
      <p className="mb-3 font-normal">{paraText}</p>
      <div className="w-full flex justify-center">
        <Button
          className="mt-8"
          gradientColors={["pink-600", "pink-600", "customGradientPurple"]}
          text={"Learn More"}
        />
      </div>
    </div>
  );
};

export default CardWithAction;
