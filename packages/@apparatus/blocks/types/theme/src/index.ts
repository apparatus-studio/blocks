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
import { TInterfaceContexts } from '@apparatus/blocks-particles-interface-contexts'
import { TAtomContainer } from '@apparatus/blocks-atoms-container'

export type TComponentProps = {
  background: {
    Background: TAtomBackground & { interfaceContext: TInterfaceContexts },
  },
  border: {
    Border: TAtomBorder & { interfaceContext: TInterfaceContexts },
  },
  image: {},
  spacer: {
    Container: TAtomContainer,
    Footprint: TAtomFootprint,
    Spacer: TAtomSpacer,
    Spacer_Input: TAtomInput,
  },
  text: {
    Text: TAtomText & { interfaceContext: TInterfaceContexts },
    Text_Input: TAtomInput & { interfaceContext: TInterfaceContexts },
  },
  vectorShape: {
    Icon: TAtomIcon & { interfaceContext: TInterfaceContexts },
  },
}

export type TTheme = {
  background: {
    Background: TThemeBackground<TAtomBackground & { interfaceContext: TInterfaceContexts }>,
  },
  border: {
    Border: TThemeBorder<TAtomBorder & { interfaceContext: TInterfaceContexts }>,
  },
  image: {},
  spacer: {
    Container: TThemeSpacer<TAtomContainer>,
    Footprint: TThemeSpacer<TAtomFootprint>,
    Spacer: TThemeSpacer<TAtomSpacer>,
    Spacer_Input: TThemeSpacer<TAtomInput>,
  },
  text: {
    Text: TThemeText<TAtomText & { interfaceContext: TInterfaceContexts }>,
    Text_Input: TThemeText<TAtomInput & { interfaceContext: TInterfaceContexts }>,
  },
  vectorShape: {
    Icon: TThemeVectorShape<TAtomIcon & { interfaceContext: TInterfaceContexts }>,
  },
}
