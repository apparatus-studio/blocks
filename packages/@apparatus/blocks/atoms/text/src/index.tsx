import { ReactNode } from 'react'
import { component, mapContext, startWithType } from 'refun'
import { Text, TText } from '@primitives/text'
import { createThemeableText } from '@apparatus/blocks-contexts-theme'
import { ContextInterface } from '@apparatus/blocks-contexts-interface'
import { TTextLevel } from '@apparatus/blocks-particles-text-levels'

export type TAtomText = {
  level: TTextLevel,
  isBold?: boolean,
  isInteractive?: boolean,
  children: ReactNode,
}

export const AtomText = component(
  startWithType<TAtomText>(),
  mapContext(ContextInterface)
)(
  createThemeableText<TText>('Text', Text)
)

AtomText.displayName = 'AtomText'
