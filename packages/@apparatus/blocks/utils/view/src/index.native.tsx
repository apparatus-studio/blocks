import React from 'react'
import { View as ReactNativeView } from 'react-native'
import { component, startWithType } from 'refun'
import { normalizeNativeStyle } from 'stili'
import { TView } from './types'

export const View = component(
  startWithType<TView>()
)(({
  background,
  bottom,
  children,
  height,
  isAbsolute,
  left,
  maxHeight,
  maxWidth,
  right,
  style,
  top,
  transform,
  width,
}) => (
  <ReactNativeView
    style={
      normalizeNativeStyle({
        ...background !== undefined
          ? { backgroundColor: `rgba(${background[0]}, ${background[1]}, ${background[2]}, ${background[3]})` }
          : {},
        bottom,
        height,
        left,
        maxHeight,
        maxWidth,
        position: isAbsolute !== undefined && isAbsolute
          ? 'absolute'
          : 'relative',
        right,
        top,
        transform,
        width,
        ...style,
      })
    }
  >
    {children}
  </ReactNativeView>
))

View.displayName = 'View'
