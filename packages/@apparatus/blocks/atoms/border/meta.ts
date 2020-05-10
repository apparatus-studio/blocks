import { TComponentConfig } from 'autoprops'
import { AtomBorder, TAtomBorder } from './src'

export const config: TComponentConfig<TAtomBorder> = {
  props: {
    multiplier: [0],
    size: [1],
  },
  required: ['multiplier', 'size'],
}

export const Component = AtomBorder

export { default as packageJson } from './package.json'
