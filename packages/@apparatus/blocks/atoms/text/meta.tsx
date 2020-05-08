import { TComponentConfig } from 'autoprops'
import { TEXT_LEVEL_BODY } from '@apparatus/blocks-particles-text-levels'
import { AtomText, TAtomText } from './src'

export const config: TComponentConfig<TAtomText> = {
  props: {
    children: ['Text'],
    level: [TEXT_LEVEL_BODY],
  },
  required: ['children'],
}

export const Component = AtomText

export { default as packageJson } from './package.json'
