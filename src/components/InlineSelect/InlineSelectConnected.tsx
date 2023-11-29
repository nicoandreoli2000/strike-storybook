import { ForwardedRef, forwardRef } from 'react'
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form'
import { InlineSelect, InlineSelectProps } from './InlineSelect'

export type InlineSelectConnectedProps<Value, Label> = Omit<
  InlineSelectProps<Value, Label>,
  'onChange' | 'value'
> &
  Omit<UseFormRegisterReturn<any>, 'ref'>

export const InlineSelectConnected = forwardRef(
  <Value, Label>(
    {
      name,
      onChange: _onChange,
      ...props
    }: InlineSelectConnectedProps<Value, Label>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { watch, setValue } = useFormContext()

    const value = watch(name)

    const handleChange = (newValue: unknown) => setValue(name, newValue)

    return (
      <InlineSelect
        ref={ref}
        onChange={handleChange}
        value={value}
        {...props}
      />
    )
  }
)
