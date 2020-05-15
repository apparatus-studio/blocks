import { TThemeableSpacer } from '@themeables/spacer'
import { platformSelect } from '@apparatus/blocks-utils-platform'
import { TAtomInput } from '@apparatus/blocks-atoms-input'
import { TTokens } from '@apparatus/blocks-themes-default-tokens'

export const themeSpacer_Input = ({ GRID }: TTokens) => ({ hasIcon }: TAtomInput): TThemeableSpacer => ({
  inlineStart: hasIcon !== undefined && hasIcon
    ? GRID * (5 + 5 + 2)
    : GRID * 5,
  inlineEnd: GRID * 5,
  blockStart: platformSelect({
    web: 15,
    native: 16,
  }),
  blockEnd: platformSelect({
    web: 15,
    native: 14,
  }),
})
