import { TThemeableSpacer } from '@themeables/spacer'
import { TAtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { TTokens } from '@apparatus/blocks-themes-default-tokens'

export const themeSpacer = ({ GRID }: TTokens) => ({ multiplier }: TAtomSpacer): TThemeableSpacer => ({
  blockStart: GRID * multiplier,
  inlineStart: GRID * multiplier,
})
