import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export default {
  parts: ['table'],
  baseStyle: {
    table: {
      bg: 'white',
      ' th': {
        font: 'inherit',
        fontWeight: 'semibold',
        fontSize: 'xs',
        pt: '6',
      },
    },
  },
  defaultProps: {
    variant: 'unstyled',
  },
} as ComponentMultiStyleConfig
