import { TComponentConfig } from 'autoprops'
import { Toggle, TToggle } from './src'

export const config: TComponentConfig<TToggle> = {
  props: {
    isChecked: [true],
  },
}

export const Component = Toggle

export { default as packageJson } from './package.json'
