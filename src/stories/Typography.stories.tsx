import { Text, Table, Thead, Tbody, Th, Td, Tr } from '../index'

const TypographyStories = {
  title: 'Typography',
}

const VARIANTS = [
  {
    variant: 'heading1',
    label: 'Heading 1',
  },
  {
    variant: 'heading2',
    label: 'Heading 2',
  },
  {
    variant: 'heading3',
    label: 'Heading 3',
  },
  {
    variant: 'heading4',
    label: 'Heading 4',
  },
  {
    variant: 'heading5',
    label: 'Heading 5',
  },
  {
    variant: 'heading6',
    label: 'Heading 6',
  },
  {
    variant: 'body1',
    label: 'Body 1',
  },
  {
    variant: 'body2',
    label: 'Body 2',
  },
  {
    variant: 'body3',
    label: 'Body 3',
  },
  {
    variant: 'label',
    label: 'Label',
  },
  {
    variant: 'caption',
    label: 'Caption',
  },
]

export const Variants = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Sample</Th>
          <Th>variant</Th>
        </Tr>
      </Thead>
      <Tbody>
        {VARIANTS.map(({ variant, label }) => (
          <Tr key={variant}>
            <Td>
              <Text variant={variant}>{label}</Text>
            </Td>
            <Td>{variant}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default TypographyStories
