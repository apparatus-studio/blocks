import { TThemeableSpacer } from '@themeables/spacer'
import { TAtomContainer } from '@apparatus/blocks-atoms-container'
import { GRID } from '@apparatus/blocks-themes-default-tokens'

export const themeContainer = ({ multiplier }: TAtomContainer): TThemeableSpacer => ({
  blockStart: GRID * multiplier,
  inlineStart: GRID * multiplier,
})
