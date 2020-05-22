import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { component, mapWithProps, startWithType, mapHandlers, mapDefaultProps } from 'refun'
import { normalizeNativeStyle, TStyle } from 'stili'
import { colorToString, isColor } from 'colorido'
import { TInput } from './types'

export const Input = component(
  startWithType<TInput>(),
  mapDefaultProps({
    blockStart: 0,
    blockEnd: 0,
  }),
  mapHandlers({
    onChangeText: ({ onChange }) => (newValue: string) => onChange(newValue),
    onSubmitEditing: ({ onSubmit }) => () => {
      if (typeof onSubmit === 'function') {
        onSubmit()
      }
    },
  }),
  mapWithProps(
    ({
      blockEnd,
      blockStart,
      color,
      fontFamily,
      fontWeight,
      fontSize,
      inlineStart,
      inlineEnd,
      letterSpacing,
      lineHeight,
      shouldUseNumberKeyboard,
    }) => {
      const style: TStyle = {
        letterSpacing,
        lineHeight,
        fontFamily,
        fontWeight,
        fontSize,
        paddingBottom: blockEnd,
        paddingLeft: inlineStart,
        paddingRight: inlineEnd,
        paddingTop: blockStart,
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: 'stretch',
        minWidth: 0,
      }

      if (isColor(color)) {
        style.color = colorToString(color)
      }

      const props: TextInputProps = {
        style: normalizeNativeStyle(style),
      }

      if (shouldUseNumberKeyboard) {
        props.keyboardType = 'numeric'
      }

      return props
    }
  )
)(({
  id,
  accessibilityLabel,
  keyboardType,
  isDisabled,
  style,
  value,
  onChangeText,
  onSubmitEditing,
  onFocus,
  onBlur,
}) => (
  <TextInput
    testID={id}
    accessibilityLabel={accessibilityLabel}
    underlineColorAndroid="rgba(0,0,0,0)"
    textAlignVertical="center"
    caretHidden={isDisabled}
    editable={!isDisabled}
    keyboardType={keyboardType}
    style={style}
    value={value}
    onFocus={onFocus}
    onBlur={onBlur}
    onChangeText={onChangeText}
    onSubmitEditing={onSubmitEditing}
  />
))

Input.displayName = 'Input'
