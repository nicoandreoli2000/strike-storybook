import { FC } from 'react'
import { Typography, TypographyProps } from './Typography'

interface HeadingProps extends Omit<TypographyProps, 'variant'> {}

const HeadingFactory =
  (variant: TypographyProps['variant']): FC<HeadingProps> =>
  ({ children, ...props }) =>
    (
      <Typography variant={variant} {...props}>
        {children}
      </Typography>
    )

export const H1 = HeadingFactory('heading1')
export const H2 = HeadingFactory('heading2')
export const H3 = HeadingFactory('heading3')
export const H4 = HeadingFactory('heading4')
export const H5 = HeadingFactory('heading5')
export const H6 = HeadingFactory('heading6')
