module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: '#14b8a6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
