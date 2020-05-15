import { TThemeableText } from '@themeables/text'
import { TTokens } from '@apparatus/blocks-themes-default-tokens'

export const themeText_Input = ({
  COLOR_ACCENT_PRIMARY,
  FONT_FAMILY_REGULAR,
  FONT_WEIGHT_REGULAR,
  LINE_HEIGHT_BODY,
  FONT_SIZE_MEDIUM,
}: TTokens) => (): TThemeableText => ({
  color: COLOR_ACCENT_PRIMARY,
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_MEDIUM,
  lineHeight: LINE_HEIGHT_BODY,
})
