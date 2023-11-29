import { extendTheme } from '@chakra-ui/react'
import { components } from './components'
import { colors } from './foundations'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        background: 'appBackground',
        height: '100%',
      },
      body: {
        fontFamily: 'body',
        fontWeight: 'normal',
        lineHeight: 'normal',
        fontSize: 'md',
      },
      '#root': {
        height: '100%',
      },
      div: { fontWeight: 500 },
      '.__floater__arrow > span': {
        color: '#303C73',
      },
      '.__floater__arrow > span > svg > polygon': {
        fill: 'currentcolor',
      },
    },
  },

  components,

  colors,

  semanticTokens: {
    colors: {
      appBackground: '#F9FAFF',
      primary: 'blue.500',
      secondary: 'gray.400',
      success: 'green.400',
      danger: 'red.400',
      warning: 'yellow.400',
      info: 'blue.400',
    },
  },

  fonts: {
    primary: 'Plus Jakarta Sans',
    secondary: 'Quicksand',
  },

  fontSizes: {
    // deprecated
    xsmall: '0.625rem',
    small: '0.75rem',
    caption: '0.875rem',
    body: '1rem',
    subtitle: '1.25rem',
    title: '1.5rem',
    heading: {
      xs: '1.75rem',
      sm: '2rem',
      md: '2.25rem',
      lg: '3rem',
    },
    display: '3.5rem',
    mega: '4.5rem',
    jumbo: '6rem',

    // new
    xxs: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },

  fontWeights: {
    //deprecated
    hairline: 100,
    thin: 200,
    extrabold: 800,
    black: 900,
    light: 400,
    regular: 500,
    bold: 600,

    // new
    normal: 400,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },

  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    '4xl': '2rem',
    full: '99rem',
  },

  space: {
    px: '0.0625rem',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },

  shadows: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none',
    'dark-lg':
      'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
  },
})
