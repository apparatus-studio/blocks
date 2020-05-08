import { TComponentConfig } from 'autoprops'
import { ICON_NAMES_CALENDAR } from '@apparatus/blocks-particles-icon-names'
import { Input, TInput } from './src'

export const config: TComponentConfig<TInput> = {
  props: {
    value: ['Test'],
    placeholder: ['Add base'],
    icon: [
      ICON_NAMES_CALENDAR,
    ],
  },
}

export const Component = Input

export { default as packageJson } from './package.json'
