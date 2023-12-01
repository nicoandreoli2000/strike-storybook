import { forwardRef } from 'react'
import {
  useStyleConfig,
  BoxProps as DivProps,
  Box as Div,
} from '@chakra-ui/react'

export interface CardProps extends DivProps {
  size?: 'sm' | 'md' | 'lg'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ size, ...props }, ref) => {
    const styles = useStyleConfig('Card', { size })

    return <Div __css={styles} {...props} ref={ref} />
  }
)
