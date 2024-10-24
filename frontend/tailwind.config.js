/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Your existing content configuration
  ],
  theme: {
    extend: {
      colors: {
        golden: '#C9A25D',    // Custom Golden color
        darkerGold: '#8C6A39', // Darker Gold color
      },
      backdropBlur: {
              sm: '4px',
            },
          },
          
                width: {
                  '7/10': '70%', // Custom width for 70%
                 
                    '3/10': '30%',
                  '4/10':'40%',
                  '6/10':'60%'
                },
          
  },
  plugins: [],
};
