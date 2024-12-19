import { createSystem, defineConfig } from "@chakra-ui/react"

const colors = {
  primary: {
    DEFAULT: {value: '#636dfa'},
    50: {value: '#f5f7ff'},
    100: {value: '#e3e8ff'},
    200: {value: '#c2c9ff'},
    300: {value: '#a2aaff'},
    400: {value: '#818bff'},
    500: {value: '#636dfa'},
    600: {value: '#4a53c9'},
    700: {value: '#383e98'},
    800: {value: '#262a66'},
    900: {value: '#151533'},
  },
  text: {
    DEFAULT: {value: '#000000'},
    0: {value: '#ffffff'},
    100: {value: '#f7f7f7'},
    200: {value: '#e1e1e1'},
    300: {value: '#cfcfcf'},
    400: {value: '#adadad'},
    500: {value: '#8c8c8c'},
    600: {value: '#6f6f6f'},
    700: {value: '#515151'},
    800: {value: '#343434'},
    900: {value: '#000000'},
  },
};

const fonts = {
  heading: {value: "'Poppins', sans-serif"},
  body: {value: "'Roboto', sans-serif"},
};

const fontSizes = {
  xs: {value: '0.75rem'}, // 12px
  sm: {value: '0.875rem'}, // 14px
  md: {value: '1rem'}, // 16px
  lg: {value: '1.125rem'}, // 18px
  xl: {value: '1.25rem'}, // 20px
  '2xl': {value: '1.5rem'}, // 24px
  '3xl': {value: '1.875rem'}, // 30px
  '4xl': {value: '2.25rem'}, // 36px
  '5xl': {value: '3rem'}, // 48px
  '6xl': {value: '3.75rem'}, // 60px
};

const space = {
  px: {value: '1px'},
  '0': {value: '0'},
  '1': {value: '0.25rem'},
  '2': {value: '0.5rem'},
  '3': {value: '0.75rem'},
  '4': {value: '1rem'},
  '5': {value: '1.25rem'},
  '6': {value: '1.5rem'},
  '8': {value: '2rem'},
  '10': {value: '2.5rem'},
  '12': {value: '3rem'},
  '16': {value: '4rem'},
  '20': {value: '5rem'},
  '24': {value: '6rem'},
  '32': {value: '8rem'},
  '40': {value: '10rem'},
  '48': {value: '12rem'},
  '56': {value: '14rem'},
  '64': {value: '16rem'},
};

const radii = {
  none: {value: '0'},
  sm: {value: '0.125rem'},
  md: {value: '0.375rem'},
  lg: {value: '0.5rem'},
  full: {value: '9999px'},
};


const config = defineConfig({
  theme: {
    tokens: {
      colors,
      fonts,
      radii,
      fontSizes,
      spacing: space,
    },
  },
})

export const theme = createSystem(config)