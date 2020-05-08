import React, { FC } from 'react'
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

type TInner = TAtomInput
  & TThemeableSpacer
  & TThemeableText
  & TMapFocused

const Inner: FC<TInner> = ({
  onBlur,
  onFocus,
  blockStart,
  blockEnd,
  inlineStart,
  inlineEnd,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  onChange,
  value,
}) => (
  <Input
    fontFamily={fontFamily}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    color={color}
    paddingLeft={inlineStart}
    onBlur={onBlur}
    onFocus={onFocus}
    paddingRight={inlineEnd}
    paddingTop={blockStart}
    paddingBottom={blockEnd}
    onChange={onChange}
    value={value}
  />
)

export const AtomInput = component(
  startWithType<TAtomInput>(),
  mapContext(ContextInterface)
)(createThemeableSpacer<TThemeableSpacer>(
  'Spacer_Input',
  createThemeableText<TThemeableText>(
    'Text_Input',
    Inner
  )
))

AtomInput.displayName = 'AtomInput'
