import { useToast as useChakraToast } from '@chakra-ui/react'

export const useToast: typeof useChakraToast = (options) =>
  useChakraToast({
    ...options,
    position: options?.position || 'top-right',
    isClosable: options?.isClosable ?? true,
    duration: options?.duration || 10000,
    variant: options?.variant || 'left-accent',
  })
