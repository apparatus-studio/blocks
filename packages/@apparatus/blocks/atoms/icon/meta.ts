import { TComponentConfig } from 'autoprops'
import { ICON_NAMES_ARROW_RIGHT } from '@apparatus/blocks-particles-icon-names'
import { AtomIcon, TAtomIcon } from './src'

export const config: TComponentConfig<TAtomIcon> = {
  props: {
    name: [ICON_NAMES_ARROW_RIGHT],
  },
}

export const Component = AtomIcon

export { default as packageJson } from './package.json'
