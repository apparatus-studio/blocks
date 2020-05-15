import { platformSelect } from '@apparatus/blocks-utils-platform'

export const FONT_FAMILY_REGULAR = platformSelect({
  web: 'Source Sans Pro',
  native: 'SourceSansPro-Regular',
})

export const FONT_FAMILY_BOLD = platformSelect({
  web: 'Source Sans Pro',
  native: 'SourceSansPro-Bold',
})

export type TTokenFontFamilies = {
  FONT_FAMILY_REGULAR?: string,
  FONT_FAMILY_BOLD?: string,
}
