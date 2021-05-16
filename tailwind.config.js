module.exports = {
  purge: [
    './src/components/**/*.tsx',
    './src/components/**/*.styled.ts',
    './src/components/**/*.styled.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: `#ff5a00`,
        hover: `#ff9459`,
        shade30: `#ffd3b2`,
        shade10: `#ffede7`,
        shade4: `#fff9f5`,
        shade5: `#f2dede`,
      },
      secondary: {
        DEFAULT: `#000fff`,
        shade30: `#b2b7ff`,
        shade10: `#e5e7ff`,
        shade4: `#f6f7ff`,
      },
      promo: {
        DEFAULT: `#f90067`,
        shade30: `#fdb2d1`,
        shade10: `#fee5ef`,
        shade4: `#fff5f9`,
      },
      success: {
        DEFAULT: `#00a346`,
        shade30: `#b2e3c7`,
        shade10: `#e5f5ec`,
        shade4: `#e5f5ec`,
      },
      alert: {
        DEFAULT: `#ffc000`,
        shade30: `#ffedb2`,
        shade10: `#fff9e5`,
        shade4: `#fffdf5`,
      },
      danger: {
        DEFAULT: `#dd1608`,
        shade30: `#f4b9b4`,
        shade10: `#fbe7e6`,
        shade4: `#fef6f5`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
