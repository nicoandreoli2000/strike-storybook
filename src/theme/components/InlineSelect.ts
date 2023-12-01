import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export default {
  parts: ['container', 'item'],
  baseStyle: {
    container: {
      display: 'flex',
      w: 'fit-content',
      bg: 'white',
      borderRadius: 'md',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'blue.50',
    },
    item: {
      py: '1',
      px: '4',
      borderRightStyle: 'solid',
      borderRightWidth: '1px',
      borderRightColor: 'blue.50',
      cursor: 'pointer',
      _last: { border: 'none', borderRightRadius: 'md' },
      _first: { borderLeftRadius: 'md' },
      _active: {
        bg: 'blue.400',
        color: 'white',
      },
      _disabled: {
        cursor: 'auto',
        _active: {
          bg: 'grey.200',
          color: 'black',
        },
      },
    },
  },
} as ComponentMultiStyleConfig
