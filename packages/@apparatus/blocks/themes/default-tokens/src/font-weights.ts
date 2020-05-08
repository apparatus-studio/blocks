import { platformSelect } from '@apparatus/blocks-utils-platform'
import { TThemeableText } from '@themeables/text'

export const FONT_WEIGHT_REGULAR: TThemeableText['fontWeight'] = platformSelect({
  web: 400,
  ios: 400,
  android: undefined,
})

export const FONT_WEIGHT_BOLD: TThemeableText['fontWeight'] = platformSelect({
  web: 700,
  ios: 700,
  android: undefined,
})
