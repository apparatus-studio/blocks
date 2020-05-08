import { TTheme } from '@apparatus/blocks-types-theme'
import { themeBackground } from './themeBackground'
import { themeBorder } from './themeBorder'
import { themeFootprint } from './themeFootprint'
import { themeText_Input } from './themeText_Input'
import { themeText } from './themeText'
import { themeSpacer_Input } from './themeSpacer_Input'
import { themeSpacer } from './themeSpacer'
import { themeIcon } from './themeIcon'

export const Theme: TTheme = {
  background: {
    Background: themeBackground,
  },
  border: {
    Border: themeBorder,
  },
  image: {},
  spacer: {
    Footprint: themeFootprint,
    Spacer: themeSpacer,
    Spacer_Input: themeSpacer_Input,
  },
  text: {
    Text: themeText,
    Text_Input: themeText_Input,
  },
  vectorShape: {
    Icon: themeIcon,
  },
}
