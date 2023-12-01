import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from '@chakra-ui/react'

/**
 * @deprecated Use Typography or Hs instead
 */
export const Text = ChakraText

/**
 * @deprecated Use TypographyProps instead
 */
export type TextProps = ChakraTextProps

export * from './Typography'
export * from './Heading'
