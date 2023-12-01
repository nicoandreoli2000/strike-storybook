import { ComponentStyleConfig, CSSObject } from '@chakra-ui/react'
import merge from 'lodash/merge'

type Variants = Record<string, CSSObject>
type ComponentScheme = Record<string, Variants>

const generateScheme = (color: string, overrides: Variants = {}): Variants =>
  merge(
    {
      solid: {
        bg: `${color}.400`,
        borderColor: `${color}.400`,
        _hover: {
          bg: `${color}.600`,
        },
        _active: {
          bg: 'none',
          color: `${color}.600`,
          borderColor: `${color}.600`,
        },
        _focus: {
          borderColor: `${color}.600`,
        },
      },
      ghost: {
        bg: `${color}.50`,
        color: `${color}.400`,
        borderColor: `${color}.50`,
        _hover: {
          bg: `${color}.100`,
          borderColor: `${color}.100`,
        },
        _active: {
          bg: 'none',
          borderColor: `${color}.100`,
        },
        _focus: {
          borderColor: `${color}.100`,
        },
      },
      link: {
        color: `${color}.500`,
        border: 'none',
      },
    },
    overrides
  )

const schemes: ComponentScheme = {
  red: generateScheme('red', {
    // Overrides here
  }),
  blue: generateScheme('blue', {
    solid: {
      color: 'white',
      _hover: {
        _disabled: {
          bg: 'grey.50',
        },
      },
      _active: {
        bg: 'white',
      },
    },
    outline: {
      bg: 'white',
      borderColor: 'grey.100',
      color: 'blue.400',
      _hover: {
        bg: 'blue.100',
        _disabled: {
          bg: 'grey.50',
        },
      },
      _active: {
        bg: 'white',
        borderColor: 'grey.200',
      },
      _focus: {
        borderColor: 'grey.200',
      },
    },
    ghost: {
      _hover: {
        _disabled: {
          bg: 'grey.50',
        },
      },
      _active: {
        bg: 'white',
      },
    },
    link: {
      _disabled: {
        bg: 'transparent',
        color: 'grey.300',

        _active: {
          color: 'grey.300',
        },
      },
    },
  }),
}

export default {
  baseStyle: {
    fontSize: 'md',
    fontWeight: 'medium',
    lineHeight: '16px',
    borderRadius: 'lg',
    borderWidth: '1px',
    borderStyle: 'solid',
    px: 4,
    w: 'fit-content',
    h: 'auto',
    _hover: { textDecor: 'none' },
    _focus: { boxShadow: 'none' },
    _disabled: {
      bg: 'grey.50',
      color: 'grey.300',
      borderColor: 'grey.100',
    },
  },
  variants: {
    solid: ({ colorScheme = 'blue' }) => schemes[colorScheme]?.solid || {},
    outline: ({ colorScheme = 'blue' }) => schemes[colorScheme]?.outline || {},
    ghost: ({ colorScheme = 'blue' }) => schemes[colorScheme]?.ghost || {},
    link: ({ colorScheme = 'blue' }) => schemes[colorScheme]?.link || {},
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      py: 2,
    },
    md: {
      fontSize: 'md',
      py: 3,
    },
    lg: {
      fontSize: 'md',
      p: 4,
    },
  },
  defaultProps: {
    variant: 'solid',
    colorScheme: 'blue',
    size: 'md',
    iconGap: '4',
  },
} as ComponentStyleConfig
