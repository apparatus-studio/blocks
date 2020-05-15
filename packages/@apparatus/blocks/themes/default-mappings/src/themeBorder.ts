import { TThemeableBorder } from '@themeables/border'
import { TAtomBorder } from '@apparatus/blocks-atoms-border'
import { TTokens } from '@apparatus/blocks-themes-default-tokens'

export const themeBorder = ({
  COLOR_ACCENT_PRIMARY,
  COLOR_LIGHT_DETAILS,
  GRID,
}: TTokens) => ({
  hasBottom,
  hasLeft,
  hasRight,
  hasTop,
  isFocused,
  multiplier,
  size,
}: TAtomBorder): TThemeableBorder => ({
  color: isFocused ? COLOR_ACCENT_PRIMARY : COLOR_LIGHT_DETAILS,
  topWidth: (hasTop !== undefined && hasTop) ? size : 0,
  bottomWidth: (hasBottom !== undefined && hasBottom) ? size : 0,
  leftWidth: (hasLeft !== undefined && hasLeft) ? size : 0,
  rightWidth: (hasRight !== undefined && hasRight) ? size : 0,
  bottomLeftRadius: GRID * multiplier,
  bottomRightRadius: GRID * multiplier,
  topLeftRadius: GRID * multiplier,
  topRightRadius: GRID * multiplier,
})
