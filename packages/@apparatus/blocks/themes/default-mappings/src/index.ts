import { TTheme } from '@apparatus/blocks-types-theme'
import * as defaultTokens from '@apparatus/blocks-themes-default-tokens'
import { themeBackground } from './themeBackground'
import { themeBorder } from './themeBorder'
import { themeFootprint } from './themeFootprint'
import { themeText_Input } from './themeText_Input'
import { themeText } from './themeText'
import { themeContainer } from './themeContainer'
import { themeSpacer_Input } from './themeSpacer_Input'
import { themeSpacer } from './themeSpacer'
import { themeIcon } from './themeIcon'

export type TTokenOverrides = Partial<defaultTokens.TTokens>
export const createTheme = (tokenOverrides: TTokenOverrides): TTheme => {
  const tokens = {
    ...defaultTokens,
    ...tokenOverrides,
  }

  return {
    background: {
      Background: themeBackground(tokens),
    },
    border: {
      Border: themeBorder(tokens),
    },
    image: {},
    spacer: {
      Container: themeContainer(tokens),
      Footprint: themeFootprint(tokens),
      Spacer: themeSpacer(tokens),
      Spacer_Input: themeSpacer_Input(tokens),
    },
    text: {
      Text: themeText(tokens),
      Text_Input: themeText_Input(tokens),
    },
    vectorShape: {
      Icon: themeIcon(tokens),
    },
  }
}
