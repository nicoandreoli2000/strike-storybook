import { ForwardedRef, forwardRef } from 'react'
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form'
import { InlineSelect, InlineSelectProps } from './InlineSelect'

export type InlineMultiSelectConnectedProps<Value, Label> = Omit<
  InlineSelectProps<Value, Label>,
  'onChange' | 'value'
> &
  Omit<UseFormRegisterReturn<any>, 'ref'>

export const InlineMultiSelectConnected = forwardRef(
  <Value, Label>(
    {
      name,
      onChange: _onChange,
      ...props
    }: InlineMultiSelectConnectedProps<Value, Label>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { watch, setValue } = useFormContext()

    const values: Value[] = watch(name)

    const handleChange = (selectedValue: unknown) => {
      if (values.includes(selectedValue as Value)) {
        setValue(
          name,
          values.filter((oldValue) => oldValue !== selectedValue)
        )

        return
      }

      setValue(name, [...values, selectedValue])
    }

    return (
      <InlineSelect
        ref={ref}
        onChange={handleChange}
        value={values}
        {...props}
      />
    )
  }
)
