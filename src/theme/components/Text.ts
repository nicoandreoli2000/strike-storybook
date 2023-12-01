import { ComponentStyleConfig } from '@chakra-ui/react'

export default {
  variants: {
    //deprecated
    bodyXSmall: {
      fontSize: 'xs',
      lineHeight: 'normal',
    },
    bodySmall: {
      fontSize: 'sm',
      lineHeight: 'normal',
    },
    body: {
      fontSize: 'md',
      lineHeight: 'normal',
    },
    bodyLarge: {
      fontSize: 'lg',
      lineHeight: 'normal',
    },
    //new
    heading1: {
      fontSize: '5xl',
      lineHeight: 1.333,
      fontWeight: 'semibold',
    },
    heading2: {
      fontSize: '4xl',
      lineHeight: 1.333,
      fontWeight: 'semibold',
    },
    heading3: {
      fontSize: '2xl',
      lineHeight: 1.666,
      fontWeight: 'semibold',
    },
    heading4: {
      fontSize: 'xl',
      lineHeight: 1.66,
      fontWeight: 'semibold',
    },
    heading5: {
      fontSize: 'lg',
      lineHeight: 1.777,
      fontWeight: 'semibold',
    },
    heading6: {
      fontSize: 'sm',
      lineHeight: 1.714,
      fontWeight: 'semibold',
    },
    body1: {
      fontSize: 'md',
      lineHeight: 1.5,
      fontWeight: 'normal',
    },
    body2: {
      fontSize: 'sm',
      lineHeight: 1.714,
      fontWeight: 'normal',
    },
    body3: {
      fontSize: 'xs',
      lineHeight: 1.333,
      fontWeight: 'normal',
    },
    label: {
      fontSize: 'xxs',
      fontWeight: 'medium',
      lineHeight: 1.6,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: 'xxs',
      fontWeight: 'normal',
      lineHeight: 1.6,
    },
  },
} as ComponentStyleConfig
