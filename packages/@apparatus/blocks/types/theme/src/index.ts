import { TThemeBackground } from '@themeables/background'
import { TThemeBorder } from '@themeables/border'
import { TThemeSpacer } from '@themeables/spacer'
import { TThemeText } from '@themeables/text'
import { TThemeVectorShape } from '@themeables/vector-shape'
import { TAtomBackground } from '@apparatus/blocks-atoms-background'
import { TAtomBorder } from '@apparatus/blocks-atoms-border'
import { TAtomFootprint } from '@apparatus/blocks-atoms-footprint'
import { TAtomIcon } from '@apparatus/blocks-atoms-icon'
import { TAtomInput } from '@apparatus/blocks-atoms-input'
import { TAtomText } from '@apparatus/blocks-atoms-text'
import { TAtomSpacer } from '@apparatus/blocks-atoms-spacer'

export type TComponentProps = {
  background: {
    Background: TAtomBackground,
  },
  border: {
    Border: TAtomBorder,
  },
  image: {},
  spacer: {
    Footprint: TAtomFootprint,
    Spacer: TAtomSpacer,
    Spacer_Input: TAtomInput,
  },
  text: {
    Text: TAtomText,
    Text_Input: TAtomInput,
  },
  vectorShape: {
    Icon: TAtomIcon,
  },
}

export type TTheme = {
  background: {
    Background: TThemeBackground<TAtomBackground>,
  },
  border: {
    Border: TThemeBorder<TAtomBorder>,
  },
  image: {},
  spacer: {
    Footprint: TThemeSpacer<TAtomFootprint>,
    Spacer: TThemeSpacer<TAtomSpacer>,
    Spacer_Input: TThemeSpacer<TAtomInput>,
  },
  text: {
    Text: TThemeText<TAtomText>,
    Text_Input: TThemeText<TAtomInput>,
  },
  vectorShape: {
    Icon: TThemeVectorShape<TAtomIcon>,
  },
}
