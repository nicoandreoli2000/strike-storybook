import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export default {
  parts: ['button', 'list', 'group', 'option'],
  baseStyle: {
    button: {
      py: 0,
      px: 3,
      bg: 'white',
      color: 'black',
      border: '1px solid',
      borderRadius: 'md',
      fontSize: 'sm',
      borderColor: 'blue.50',
      _hover: { bg: 'white' },
      _focus: { borderColor: 'blue.50' },
      _active: { borderColor: 'blue.50' },
      display: 'flex',
      justify: 'space-between',
      alignItems: 'center',
      '&>span:first-of-type': {
        textAlign: 'left',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    },
    list: {
      borderColor: 'blue.50',
      maxH: '30rem',
      overflowY: 'scroll',
    },
    group: {
      fontWeight: 'semibold',
      fontSize: 'xs',
    },
    option: {
      fontSize: 'sm',
    },
  },
  variants: {
    empty: {
      button: {
        border: 'none',
        bg: 'none',
        px: 0,
      },
      option: {
        _hover: { bg: 'blue.200' },
        _focus: { bg: 'blue.200' },
        _active: { bg: 'blue.200' },
      },
    },
  },
  sizes: {
    sm: {
      button: {
        w: '8rem',
        h: '1.9rem',
      },
      list: {
        w: '8rem',
      },
    },
    md: {
      button: {
        w: '10.5rem',
        h: '2.2rem',
      },
      list: {
        w: '10rem',
      },
    },
    lg: {
      button: {
        w: '12.5rem',
        h: '2.6rem',
      },
      list: {
        w: '12.5rem',
      },
    },
  },
  defaultProps: { variant: 'default', size: 'md' },
} as ComponentMultiStyleConfig
