import { TThemeableText } from '@themeables/text'
import {
  COLOR_LIGHT_DETAILS,
  FONT_FAMILY_REGULAR,
  FONT_WEIGHT_REGULAR,
  LINE_HEIGHT_ERROR_LABEL,
  FONT_SIZE_SMALL,
} from '@apparatus/blocks-themes-default-tokens'

export const themeText_Input = (): TThemeableText => ({
  color: COLOR_LIGHT_DETAILS,
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_SMALL,
  lineHeight: LINE_HEIGHT_ERROR_LABEL,
})
