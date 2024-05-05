import React from 'react';

const CardWithLogo = ({ icon }) => {
  return (
    <div className="text-white flex justify-center align-middle items-center 
    w-40 md:w-60 sm:w-60 lg:w-48 
    h-24 md:h-32 
    px-3 py-6
     border-2
     bg-gradient-to-b from-customFirstGradient via-customSecondGradient to-customThirdGradient
     border-customSlate rounded-lg shadow-lg dark:border-customDarkGray text-center"

      >
      {icon}

    </div>
  );
};

export default CardWithLogo;
