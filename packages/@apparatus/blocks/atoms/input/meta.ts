import { TComponentConfig } from 'autoprops'
import { AtomInput, TAtomInput } from './src'

export const config: TComponentConfig<TAtomInput> = {
  props: {
    value: ['Text'],
    onChange: [() => {}],
  },
}

export const Component = AtomInput

export { default as packageJson } from './package.json'
