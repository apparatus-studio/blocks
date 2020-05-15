import { TThemeableSpacer } from '@themeables/spacer'
import { TAtomContainer } from '@apparatus/blocks-atoms-container'
import { TTokens } from '@apparatus/blocks-themes-default-tokens'

export const themeContainer = ({ GRID }: TTokens) => ({ multiplier }: TAtomContainer): TThemeableSpacer => ({
  blockStart: GRID * multiplier,
  inlineStart: GRID * multiplier,
})
