import { TMapFocused, startWithType, mapContext, component } from 'refun'
import { Input } from '@primitives/input'
import { TThemeableSpacer } from '@themeables/spacer'
import { TThemeableText } from '@themeables/text'
import { createThemeableSpacer, createThemeableText } from '@apparatus/blocks-contexts-theme'
import { ContextInterface } from '@apparatus/blocks-contexts-interface'

export type TAtomInput = {
  value: string,
  onChange: (value: string) => void,
  hasIcon?: boolean,
} & TMapFocused

export const AtomInput = createThemeableSpacer<TThemeableSpacer>(
  'Spacer_Input',
  component(
    startWithType<TAtomInput>(),
    mapContext(ContextInterface)
  )(
    createThemeableText<TThemeableText>(
      'Text_Input',
      Input
    )
  )
)

AtomInput.displayName = 'AtomInput'
