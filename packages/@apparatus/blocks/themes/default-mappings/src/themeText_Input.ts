import { elegir } from 'elegir'
import { TThemeableText } from '@themeables/text'
import { TTokens } from '@apparatus/blocks-themes-default-tokens'
import { TInterfaceContexts, INTERFACE_CONTEXT_ACCENT, INTERFACE_CONTEXT_SUCCESS, INTERFACE_CONTEXT_ERROR } from '@apparatus/blocks-particles-interface-contexts'
import { TAtomInput } from '@apparatus/blocks-atoms-input'

export const themeText_Input = ({
  COLOR_BACKGROUND_PRIMARY,
  COLOR_CONTENT_PRIMARY,
  FONT_FAMILY_REGULAR,
  FONT_WEIGHT_REGULAR,
  LINE_HEIGHT_BODY,
  FONT_SIZE_MEDIUM,
}: TTokens) => ({ interfaceContext }: TAtomInput & { interfaceContext?: TInterfaceContexts }): TThemeableText => ({
  color: elegir(
    interfaceContext === INTERFACE_CONTEXT_ACCENT,
    COLOR_BACKGROUND_PRIMARY,
    interfaceContext === INTERFACE_CONTEXT_SUCCESS,
    COLOR_BACKGROUND_PRIMARY,
    interfaceContext === INTERFACE_CONTEXT_ERROR,
    COLOR_BACKGROUND_PRIMARY,
    true,
    COLOR_CONTENT_PRIMARY
  ),
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_MEDIUM,
  lineHeight: LINE_HEIGHT_BODY,
})
