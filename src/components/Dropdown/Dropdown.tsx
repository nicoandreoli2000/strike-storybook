import {
  Icon,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuItemOption,
  MenuList,
  MenuListProps,
  MenuOptionGroup,
  Portal,
  useMultiStyleConfig,
  Button,
} from '@chakra-ui/react'
import { ArrowDropDown } from '@material-ui/icons'
import { Option } from 'types'

export interface DropdownProps<Value, Label>
  extends Omit<MenuButtonProps, 'onChange' | 'value'> {
  options: Option<Value, Label>[]
  value: Value
  onChange: (x: Value) => void

  getKey?: (value: Value) => string
  message?: string
  placeholder?: string
  enableDefaultOption?: true

  variant?: 'default' | 'empty'
  size?: 'sm' | 'md' | 'lg'
  renderListInPortal?: boolean
  listProps?: MenuListProps
}

export const Dropdown = <Value, Label>({
  options,
  onChange,
  value,
  getKey = (x: Value) => x as unknown as string,
  placeholder = 'Select an option',
  message,
  enableDefaultOption,
  variant,
  size,
  renderListInPortal,
  listProps = {},
  ...props
}: DropdownProps<Value, Label>) => {
  const selectedOption = options.find((option) => option.value === value)

  const dropdownOptions: Option<Value, Label>[] = enableDefaultOption
    ? [{ label: placeholder, value: '' } as any, ...options]
    : options

  const styles = useMultiStyleConfig('Dropdown', { variant, size })

  const List = () => (
    <MenuList sx={styles.list} {...listProps}>
      <MenuOptionGroup
        onChange={(evt) => onChange(evt as unknown as Value)}
        sx={styles.group}
        title={message}
        value={getKey(value)}
      >
        {dropdownOptions.map((option) => (
          <MenuItemOption
            key={getKey(option.value)}
            icon={null}
            sx={styles.option}
            value={getKey(option.value)}
          >
            {option.label}
          </MenuItemOption>
        ))}
      </MenuOptionGroup>
    </MenuList>
  )

  return (
    <Menu>
      <MenuButton
        __css={styles.button}
        as={Button}
        rightIcon={<Icon as={ArrowDropDown} color={props.color || 'black'} />}
        {...props}
      >
        {selectedOption?.label || placeholder}
      </MenuButton>
      {renderListInPortal ? (
        <Portal>
          <List />
        </Portal>
      ) : (
        <List />
      )}
    </Menu>
  )
}
