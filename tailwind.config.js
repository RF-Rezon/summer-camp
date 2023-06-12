

export default {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      body: ['Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
