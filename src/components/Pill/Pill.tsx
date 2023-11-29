import { FC } from 'react'
import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react'

export interface PillProps extends BoxProps {
  variant?: 'filled' | 'outline'
  size?: 'xs' | 'sm' | 'md'
  colorScheme?:
    | 'red'
    | 'blue'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'orange'
    | 'violet'
    | 'grey'
}

export const Pill: FC<PillProps> = ({
  variant,
  colorScheme,
  size,
  children,
  ...props
}) => {
  const styles = useStyleConfig('Pill', { colorScheme, size, variant })

  return (
    <Box __css={styles} {...props}>
      {children}
    </Box>
  )
}
