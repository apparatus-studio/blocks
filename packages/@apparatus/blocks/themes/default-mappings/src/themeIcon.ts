import { elegir } from 'elegir'
import { TAtomIcon } from '@apparatus/blocks-atoms-icon'
import { TThemeableVectorShape } from '@themeables/vector-shape'
import {
  ICON_NAMES_ARROW_LEFT,
  ICON_NAMES_CLOSE,
  ICON_NAMES_ARROW_DOWN,
  ICON_NAMES_NAVIGATION,
  ICON_NAMES_ARROW_RIGHT,
  ICON_NAMES_SETTINGS,
  ICON_NAMES_CHECK,
  ICON_NAMES_PLUS,
  ICON_NAMES_TIMER,
  ICON_NAMES_WATCH,
  ICON_NAMES_CALENDAR,
  ICON_NAMES_SEARCH,
} from '@apparatus/blocks-particles-icon-names'
import { INTERFACE_CONTEXT_ACCENT, TInterfaceContexts } from '@apparatus/blocks-particles-interface-contexts'
import {
  COLOR_ACCENT_PRIMARY,
  COLOR_BACKGROUND_PRIMARY,
  COLOR_LIGHT_DETAILS,
  GRID,
  ICON_ARROW_LEFT,
  ICON_CLOSE,
  ICON_ARROW_DOWN,
  ICON_NAVIGATION,
  ICON_ARROW_RIGHT,
  ICON_SETTINGS,
  ICON_CHECK,
  ICON_PLUS,
  ICON_TIMER,
  ICON_WATCH,
  ICON_SEARCH,
  ICON_CALENDAR,
} from '@apparatus/blocks-themes-default-tokens'

export const themeIcon = ({ name, isInteractive, interfaceContext }: TAtomIcon & { interfaceContext?: TInterfaceContexts }): TThemeableVectorShape => ({
  height: GRID * 5,
  width: GRID * 5,
  color: elegir(
    interfaceContext === INTERFACE_CONTEXT_ACCENT,
    COLOR_BACKGROUND_PRIMARY,
    isInteractive !== undefined && isInteractive,
    COLOR_ACCENT_PRIMARY,
    true,
    COLOR_LIGHT_DETAILS
  ),
  path: elegir(
    name === ICON_NAMES_ARROW_LEFT,
    ICON_ARROW_LEFT,
    name === ICON_NAMES_CLOSE,
    ICON_CLOSE,
    name === ICON_NAMES_ARROW_DOWN,
    ICON_ARROW_DOWN,
    name === ICON_NAMES_NAVIGATION,
    ICON_NAVIGATION,
    name === ICON_NAMES_ARROW_RIGHT,
    ICON_ARROW_RIGHT,
    name === ICON_NAMES_SETTINGS,
    ICON_SETTINGS,
    name === ICON_NAMES_CHECK,
    ICON_CHECK,
    name === ICON_NAMES_PLUS,
    ICON_PLUS,
    name === ICON_NAMES_TIMER,
    ICON_TIMER,
    name === ICON_NAMES_WATCH,
    ICON_WATCH,
    name === ICON_NAMES_SEARCH,
    ICON_SEARCH,
    name === ICON_NAMES_CALENDAR,
    ICON_CALENDAR,
    true,
    ''
  ),
})
