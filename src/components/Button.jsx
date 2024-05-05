import React, { useState } from "react";
import MailSvg from "../assets/icons/Svgs/MailSvg";

const Button = ({ text, width, icon, type }) => {
    // eslint-disable-next-line
    const [gradientBtn, setGradientBtn] = useState(true); // Always use hardcoded gradient colors

    let buttonWidth = width ? `w-full md:w-72 lg:w-${width}` : ''; // Add width class if width is provided

    var buttonStyles;

    if (gradientBtn) {
        buttonStyles = `
            text-white font-medium flex items-center justify-center rounded-full text-sm px-8 py-3
            bg-gradient-to-r
            from-pink-600
            via-pink-600
            to-customGradientPurple
            hover:from-customGradientPurple
            hover:via-customGradientPurple
            hover:to-customGradientPurple
        `;
    } else {
        buttonStyles = `
            text-white font-medium flex items-center justify-center rounded-full text-sm px-8 py-3
            hover:bg-customGradientPurple bg-purple-500
        `;
    }

    return (
        <button className={`${buttonStyles} ${buttonWidth}`} type={type}>
                {icon && <MailSvg className="mr-1" />}
                {text}
        </button>
    );
};

export default Button;
