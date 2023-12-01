import { FC } from 'react'
import { Text, TextProps } from '@chakra-ui/react'

export interface TypographyProps extends TextProps {
  variant?:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'label'
    | 'caption'
}

export const Typography: FC<TypographyProps> = ({
  variant = 'body1',
  children,
  ...props
}) => {
  return (
    <Text as="p" variant={variant} {...props}>
      {children}
    </Text>
  )
}
