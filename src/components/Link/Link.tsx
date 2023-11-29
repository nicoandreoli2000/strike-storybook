import {
  Link as ReactLink,
  LinkProps as ReactLinkProps,
} from 'react-router-dom'
import {
  forwardRef,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  useStyleConfig,
} from '@chakra-ui/react'

export type LinkProps = Partial<Omit<ReactLinkProps, 'color'>> &
  Omit<ChakraLinkProps, 'children'> & { disabled?: boolean }

export const Link = forwardRef(({ to, ...props }: LinkProps, ref) => {
  const styles = useStyleConfig('Link')

  const variableProps =
    to && !props.disabled ? { as: ReactLink, to, ...props } : props

  return <ChakraLink ref={ref} __css={styles} {...variableProps} />
})
