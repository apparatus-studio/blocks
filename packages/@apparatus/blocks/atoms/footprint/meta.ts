import { TComponentConfig } from 'autoprops'
import { TEXT_LEVEL_PRIMARY_TITLE } from '@apparatus/blocks-particles-text-levels'
import { AtomFootprint, TAtomFootprint } from './src'

export const config: TComponentConfig<TAtomFootprint> = {
  props: {
    level: [TEXT_LEVEL_PRIMARY_TITLE],
  },
}

export const Component = AtomFootprint

export { default as packageJson } from './package.json'
