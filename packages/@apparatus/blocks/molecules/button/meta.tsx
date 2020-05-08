import { TComponentConfig } from 'autoprops'
import { BUTTON_LEVEL_PRIMARY, BUTTON_LEVEL_SECONDARY } from '@apparatus/blocks-particles-button-levels'
import { ICON_NAMES_CALENDAR, ICON_NAMES_WATCH } from '@apparatus/blocks-particles-icon-names'
import { Button, TButton } from './src'

export const config: TComponentConfig<TButton> = {
  props: {
    level: [BUTTON_LEVEL_PRIMARY, BUTTON_LEVEL_SECONDARY],
    children: ['Show me'],
    icon: [
      ICON_NAMES_CALENDAR,
      ICON_NAMES_WATCH,
    ],
  },
  required: ['children', 'level'],
}

export const Component = Button

export { default as packageJson } from './package.json'
