/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'customPurple': '#5315B5',
        'customDarkGray': '#191C26',
        'customBlendGray': '#070b2091',
        'customBlendWhite': '#FFFFFF00',
        'customLightpurple': '#DDD0F0',
        'customhoverPink': '#FD0988',
        'customGradientPurple': '#8639FF',
        'customGreenishYellow': '#B1CB0D',
        'customOffWhite': '#E7E6E6  ',
        'customSlate': '#FFFFFF2B  ',
        'customFirstGradient': '#FFFFFF33  ',
        'customSecondGradient': '#FFFFFF1A  ',
        'customThirdGradient': '#FFFFFF00  ',
        'customBlueBlend': '#191C3A  ',
        'customBlueBlendForCamera': '#191C26',
        'customGrayForCard': '#252831',
        'customGrayForEmail': '#252831',

        'customGradientFirstColorForFooterEmail': '#252831',
        'customGradientSecondColorForFooterEmail': '#FFFFFF',

      },
      height: {
        '90': '44rem',
        'oneHalf90': '34rem',
        'oneThird90': '24rem',
        
        'twentyEight': '28rem',
        'thirtyEight': '38rem',

        'fortyRem': '40rem',
        'fiftyRem': '50rem',
        'fiftyFiveRem': '55rem',
        'sixtyRem': '60rem',
        'seventyRem': '70rem',
        'eightyRem': '80rem',
        

      }
    },
  },
  plugins: [],

  

}

