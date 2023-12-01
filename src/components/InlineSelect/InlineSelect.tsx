import { ForwardedRef, forwardRef } from 'react'
import {
  useMultiStyleConfig,
  Box,
  Text,
  Icon,
  Button,
  ButtonProps,
} from '@chakra-ui/react'
import { Option } from 'types'

export interface InlineSelectProps<Value, Label> {
  options: Option<Value, Label>[]
  value: Value | Value[]
  buttonProps?: ButtonProps
  onChange?: (value: Value) => void
  disabled?: boolean
}

export const InlineSelect = forwardRef(
  <Value, Label>(
    {
      options,
      value,
      onChange = () => {},
      disabled,
      buttonProps,
    }: InlineSelectProps<Value, Label>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const styles = useMultiStyleConfig('InlineSelect', {})

    return (
      <Box ref={ref} __css={styles.container}>
        {options.map((option) => {
          const isCurrent = Array.isArray(value)
            ? value.includes(option.value)
            : value === option.value

          const handleChange = () => onChange(option.value)

          return (
            <Button
              key={option.value as unknown as string}
              __css={styles.item}
              disabled={disabled}
              display="flex"
              isActive={isCurrent}
              onClick={handleChange}
              py={1}
              {...buttonProps}
            >
              {option.leftIcon && <Icon as={option.leftIcon} />}
              {option.label && (
                <Text fontSize="sm" px="2" whiteSpace="nowrap">
                  {option.label}
                </Text>
              )}
            </Button>
          )
        })}
      </Box>
    )
  }
)
