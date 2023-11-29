import { theme } from '../theme'
import { Box, Text, Table, Thead, Tbody, Th, Td, Tr } from '../index'
import { colors } from '../theme/foundations'

const FoundationsStorys = {
  title: 'Foundations',
}

const COLORS = Object.entries(colors).reduce((acc, [key, value]) => {
  if (typeof value === 'string') {
    acc.push({ key, value })
  } else {
    Object.entries(value).forEach(([subKey, subValue]) => {
      acc.push({ key: `${key}.${subKey}`, value: subValue as string })
    })
  }

  return acc
}, [] as { key: string; value: string }[])

export const Colors = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Sample</Th>
          <Th>Token</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        {COLORS.map((color) => (
          <Tr key={color.key}>
            <Td>
              <Box bg={color.value} h="50px" w="50px" />
            </Td>
            <Td>{color.key}</Td>
            <Td>{color.value}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

const FONT_SIZES = Object.entries(theme['fontSizes'])
  .filter(([key, _]) =>
    [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      '5xl',
      '6xl',
      '7xl',
      '8xl',
      '9xl',
    ].includes(key)
  )
  .map(([key, value]) => ({
    key,
    value,
  }))
  .reverse() as { key: string; value: string }[]

export const FontSizes = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Sample</Th>
          <Th>Token</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        {[...FONT_SIZES, { key: 'xxs', value: '0.625rem' }].map(
          (size, index) => (
            <Tr key={size.key}>
              <Td fontSize={size.value} h={`${135 - index * 10}px`}>
                Text
              </Td>
              <Td>{size.key}</Td>
              <Td>{size.value}</Td>
            </Tr>
          )
        )}
      </Tbody>
    </Table>
  )
}

const FONT_WEIGHTS = Object.entries(theme['fontWeights'])
  .filter(([key, _]) => ['normal', 'medium', 'semibold'].includes(key))
  .map(([key, value]) => ({
    key,
    value,
  })) as any as { key: string; value: string }[]

export const FontWeights = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Sample</Th>
          <Th>Token</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        {FONT_WEIGHTS.map(({ key, value }) => (
          <Tr key={key}>
            <Td>
              <Text fontWeight={value}>Text</Text>
            </Td>
            <Td>{key}</Td>
            <Td>{value}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

const SEMANTIC_TOKENS = Object.entries(theme['semanticTokens']['colors']).map(
  ([key, value]) => ({
    key,
    value,
  })
) as { key: string; value: string }[]

export const SemanticTokens = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Sample</Th>
          <Th>Token</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        {SEMANTIC_TOKENS.map(({ key, value }) => (
          <Tr key={key}>
            <Td>
              <Box bg={value} h="50px" w="50px" />
            </Td>
            <Td>{key}</Td>
            <Td>{value}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default FoundationsStorys
