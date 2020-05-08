import { Border } from '@primitives/border'
import { TThemeableBorder } from '@themeables/border'
import { createThemeableBorder } from '@apparatus/blocks-contexts-theme'

export type TAtomBorder = {
  hasBottom?: boolean,
  hasLeft?: boolean,
  hasRight?: boolean,
  hasTop?: boolean,
}

export const AtomBorder = createThemeableBorder<TThemeableBorder>('Border', Border)

AtomBorder.displayName = 'AtomBorder'
