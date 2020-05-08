import { TComponentConfig } from 'autoprops'
import { AtomSpacer, TAtomSpacer } from './src'

export const config: TComponentConfig<TAtomSpacer> = {
  props: {
    multiplier: [1, 2, 3],
  },
  required: ['multiplier'],
}

export const Component = AtomSpacer

export { default as packageJson } from './package.json'
