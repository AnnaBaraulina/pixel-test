import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const corePlugins = {
  container: false,
};
export const theme = {
  fontFamily: {
    // FIXME: Add the real project font families, which are imported in the "fonts.css" file,
    // and give them the human-readable names
    sans: ['Roboto', ..._fontFamily.sans],
    mono: ['Poppins', ..._fontFamily.mono],
  },
  colors: ({ colors }) => ({
    inherit: colors.inherit,
    current: colors.current,
    transparent: colors.transparent,
    // FIXME: Add colors which are used in the project. Make sure that they are prepared
    // in the Figma and followed the naming "primary/secondary/gray-${number}"
    // Example of correctly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586876-5e834233-9639-4166-9811-b00e63820d98.png
    black: '#0E0A0F',
    white: '#FFFFFF',
    primary: {
      1: '#9966FF',
      2: '#CB6AFB',
    },
    secondary: {
      1: '#40BFAA',
      4: '#F04242',
    },
    gray: {
      98: '#FAF9FA',
      94: '#F0EEF1',
    },
  }),
  // FIXME: Check if the breakpoints ("screens") are correct for the project
  screens: {
    xl: { max: '1439px' },
    lg: { max: '1350px' },
    md: { max: '1157px' },
    sm: { max: '810px' },
    xs: { max: '600px' },
    '2xs': { max: '413px' },
  },
};
export const plugins = [require('tailwindcss-safe-area')];
