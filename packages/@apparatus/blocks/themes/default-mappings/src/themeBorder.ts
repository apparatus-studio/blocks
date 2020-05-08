import { TThemeableBorder } from '@themeables/border'
import { TAtomBorder } from '@apparatus/blocks-atoms-border'
import { COLOR_LIGHT_DETAILS } from '@apparatus/blocks-themes-default-tokens'

export const themeBorder = ({ hasTop }: TAtomBorder): TThemeableBorder => ({
  color: COLOR_LIGHT_DETAILS,
  topWidth: (hasTop !== undefined && hasTop) ? 1 : 0,
})
