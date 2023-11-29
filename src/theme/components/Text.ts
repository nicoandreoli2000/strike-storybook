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
      lineHeight: '64px',
      fontWeight: 'semibold',
    },
    heading2: {
      fontSize: '4xl',
      lineHeight: '48px',
      fontWeight: 'semibold',
    },
    heading3: {
      fontSize: '2xl',
      lineHeight: '36px',
      fontWeight: 'semibold',
    },
    heading4: {
      fontSize: 'xl',
      lineHeight: '32px',
      fontWeight: 'semibold',
    },
    heading5: {
      fontSize: 'lg',
      lineHeight: '28px',
      fontWeight: 'semibold',
    },
    heading6: {
      fontSize: 'sm',
      lineHeight: '24px',
      fontWeight: 'semibold',
    },
    body1: {
      fontSize: 'md',
      lineHeight: '24px',
      fontWeight: 'normal',
      fontFamily: 'Inter, sans-serif',
    },
    body2: {
      fontSize: 'sm',
      lineHeight: '20px',
      fontWeight: 'normal',
      fontFamily: 'Inter, sans-serif',
    },
    body3: {
      fontSize: 'xs',
      lineHeight: '16px',
      fontWeight: 'normal',
      fontFamily: 'Inter, sans-serif',
    },
    label: {
      fontSize: 'xxs',
      fontWeight: 'medium',
      lineHeight: '16px',
      textTransform: 'uppercase',
      fontFamily: 'Inter, sans-serif',
    },
    caption: {
      fontSize: 'xxs',
      fontWeight: 'normal',
      lineHeight: '16px',
      fontFamily: 'Inter, sans-serif',
    },
  },
} as ComponentStyleConfig
