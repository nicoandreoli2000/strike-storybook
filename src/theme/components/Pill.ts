import { ComponentStyleConfig, CSSObject } from '@chakra-ui/react'
import merge from 'lodash/merge'

type Variants = Record<string, CSSObject>
type ComponentScheme = Record<string, Variants>

const generateScheme = (color: string, overrides: Variants = {}): Variants =>
  merge(
    {
      filled: {
        bg: `${color}.50`,
        color: `${color}.600`,
      },
      outline: {
        bg: 'none',
        color: `${color}.400`,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: `${color}.400`,
      },
    },
    overrides
  )

const pillColorSchemes = [
  'red',
  'blue',
  'yellow',
  'green',
  'teal',
  'orange',
  'violet',
  'grey',
]

const schemes: ComponentScheme = pillColorSchemes.reduce(
  (acum, color) => ({ ...acum, [color]: generateScheme(color) }),
  {}
)

export default {
  baseStyle: {
    w: 'fit-content',
    h: 'fit-content',
    rounded: 'full',
    textAlign: 'center',
  },
  variants: {
    outline: ({ colorScheme }) => schemes[colorScheme]?.outline || {},
    filled: ({ colorScheme }) => schemes[colorScheme]?.filled || {},
  },
  sizes: {
    xs: {
      fontSize: 'xs',
      px: '2',
      py: '1',
    },
    sm: {
      fontSize: 'sm',
      px: '4',
      py: '2',
    },
    md: {
      fontSize: 'md',
      px: '6',
      py: '2',
    },
  },
  defaultProps: {
    variant: 'filled',
    colorScheme: 'blue',
    size: 'md',
  },
} as ComponentStyleConfig
