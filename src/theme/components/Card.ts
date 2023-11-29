import { ComponentStyleConfig } from '@chakra-ui/react'

export default {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 'lg',
    background: 'white',
    boxShadow: '5px 10px 20px 2px rgba(83, 101, 181, 0.05)',
    border: '1px solid',
    borderColor: 'blue.50',
    p: '6',
  },
  sizes: {
    sm: {
      w: '25rem',
    },
    md: {
      w: '35rem',
    },
    lg: {
      w: '100%',
    },
  },
  defaultProps: { size: 'lg' },
} as ComponentStyleConfig
