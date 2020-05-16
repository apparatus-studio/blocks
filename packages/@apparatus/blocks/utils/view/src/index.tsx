// TODO

// - Normalize Transform

import React from 'react'
import { startWithType, component } from 'refun'
import { normalizeWebStyle } from 'stili'
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
  <div
    style={
      normalizeWebStyle({
        ...background !== undefined
          ? { backgroundColor: `rgba(${background[0]}, ${background[1]}, ${background[2]}, ${background[3]})` }
          : {},
        bottom,
        display: 'flex',
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
  </div>
))

View.displayName = 'View'
