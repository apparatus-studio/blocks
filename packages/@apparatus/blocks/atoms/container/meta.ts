import { TComponentConfig } from 'autoprops'
import { Text } from '@primitives/text'
import { AtomContainer, TAtomContainer } from './src'

export const config: TComponentConfig<TAtomContainer, 'text'> = {
  props: {
    multiplier: [1, 2, 3],
  },
  children: {
    text: {
      Component: Text,
      config: {
        props: {
          children: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et elit efficitur, vestibulum quam non, porttitor arcu.'],
        },
      },
    },
  },
  required: ['multiplier', 'text'],
}

export const Component = AtomContainer

export { default as packageJson } from './package.json'
