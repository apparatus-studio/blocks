import React, { KeyboardEvent } from 'react'
import { normalizeWebStyle, TStyle } from 'stili'
import { component, mapWithProps, startWithType, mapHandlers } from 'refun'
import { colorToString, isColor } from 'colorido'
import { TInput } from './types'

export const Input = component(
  startWithType<TInput>(),
  mapHandlers({
    onChange: ({ onChange }) => (event: any) => onChange(event.target.value),
    onKeyPress: ({ onSubmit }) => (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && typeof onSubmit === 'function') {
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
      inlineEnd,
      inlineStart,
      letterSpacing,
      lineHeight,
      shouldUseNumberKeyboard,
    }) => {
      const style: TStyle = {
        _webOnly: {
          fontSmoothing: 'antialiased',
          textRendering: 'geometricPrecision',
          textSizeAdjust: 'none',
          appearance: 'none',
          boxSizing: 'border-box',
          maxWidth: '100%',
        },
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0,
        fontFamily,
        fontWeight,
        fontSize,
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: 'stretch',
        paddingBottom: blockEnd,
        paddingLeft: inlineStart,
        paddingRight: inlineEnd,
        paddingTop: blockStart,
        minWidth: 0,
        letterSpacing,
        lineHeight,
      }

      if (isColor(color)) {
        style.color = colorToString(color)
      }

      return {
        style: normalizeWebStyle(style),
        ...shouldUseNumberKeyboard
          ? { type: 'tel' }
          : {},
      }
    }
  )
)(({
  id,
  accessibilityLabel,
  style,
  value,
  isDisabled,
  onChange,
  onKeyPress,
  onFocus,
  onBlur,
  onPressIn,
  onPressOut,
  type,
}) => (
  <input
    id={id}
    aria-label={accessibilityLabel}
    disabled={isDisabled}
    style={style}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    onFocus={onFocus}
    onBlur={onBlur}
    onMouseDown={onPressIn}
    onMouseUp={onPressOut}
    type={type}
  />
))

Input.displayName = 'Input'
