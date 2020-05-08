import { TThemeableSpacer } from '@themeables/spacer'
import { TAtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { GRID } from '@apparatus/blocks-themes-default-tokens'

export const themeSpacer = ({ multiplier }: TAtomSpacer): TThemeableSpacer => ({
  blockStart: GRID * multiplier,
  inlineStart: GRID * multiplier,
})
