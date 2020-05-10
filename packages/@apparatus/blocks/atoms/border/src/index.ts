import { component, startWithType, mapContext } from 'refun'
import { Border } from '@primitives/border'
import { TThemeableBorder } from '@themeables/border'
import { createThemeableBorder } from '@apparatus/blocks-contexts-theme'
import { ContextInterface } from '@apparatus/blocks-contexts-interface'

export type TAtomBorder = {
  hasBottom?: boolean,
  hasLeft?: boolean,
  hasRight?: boolean,
  hasTop?: boolean,
  isFocused?: boolean,
  multiplier: 0 | 3 | 6 | 12,
  size: 0 | 1 | 2,
}

export const AtomBorder = component(
  startWithType<TAtomBorder>(),
  mapContext(ContextInterface)
)(
  createThemeableBorder<TThemeableBorder>('Border', Border)
)

AtomBorder.displayName = 'AtomBorder'
