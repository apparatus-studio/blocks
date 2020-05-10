import { TComponentConfig } from 'autoprops'
import {
  ICON_NAMES_ARROW_DOWN,
  ICON_NAMES_ARROW_LEFT,
  ICON_NAMES_ARROW_RIGHT,
  ICON_NAMES_CALENDAR,
  ICON_NAMES_CHECK,
  ICON_NAMES_CLOSE,
  ICON_NAMES_NAVIGATION,
  ICON_NAMES_PLACEHOLDER,
  ICON_NAMES_PLUS,
  ICON_NAMES_SEARCH,
  ICON_NAMES_SETTINGS,
  ICON_NAMES_TIMER,
  ICON_NAMES_WARNING,
  ICON_NAMES_WATCH,
} from '@apparatus/blocks-particles-icon-names'
import { ButtonIcon, TButtonIcon } from './src'

export const config: TComponentConfig<TButtonIcon> = {
  props: {
    name: [
      ICON_NAMES_ARROW_DOWN,
      ICON_NAMES_ARROW_LEFT,
      ICON_NAMES_ARROW_RIGHT,
      ICON_NAMES_CALENDAR,
      ICON_NAMES_CHECK,
      ICON_NAMES_CLOSE,
      ICON_NAMES_NAVIGATION,
      ICON_NAMES_PLACEHOLDER,
      ICON_NAMES_PLUS,
      ICON_NAMES_SEARCH,
      ICON_NAMES_SETTINGS,
      ICON_NAMES_TIMER,
      ICON_NAMES_WARNING,
      ICON_NAMES_WATCH,
    ],
  },
}

export const Component = ButtonIcon

export { default as packageJson } from './package.json'
