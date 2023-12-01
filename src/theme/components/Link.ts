import { ComponentStyleConfig } from '@chakra-ui/react'

export default {
  baseStyle: {
    fontSize: 'md',
    fontWeight: 'regular',
    textDecoration: 'none',
    _hover: {
      textDecoration: 'none',
    },
    _focus: { boxShadow: 'none', textDecoration: 'none' },
    borderColor: 'blue.400',
  },
  variants: {
    disabled: {
      cursor: 'not-allowed',
    },
    underlined: {
      borderBottomStyle: 'solid',
      borderBottomWidth: '3px',
      borderBottomColor: 'blue.400',
    },
    squared: {
      backgroundColor: 'blue.50',
      borderRadius: '8px',
    },
  },
  defaultProps: {
    colorScheme: 'blue',
  },
} as ComponentStyleConfig
