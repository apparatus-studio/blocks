import { TComponentConfig } from 'autoprops'
import { AtomBackground, TAtomBackground } from './src'

export const config: TComponentConfig<TAtomBackground> = {
  props: {},
}

export const Component = AtomBackground

export { default as packageJson } from './package.json'
