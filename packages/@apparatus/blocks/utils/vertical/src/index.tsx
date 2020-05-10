import React, { ReactNode } from 'react'
import { elegir } from 'elegir'
import { component, startWithType } from 'refun'
import { View } from '@primitives/view'

export type TVertical = {
  height?: string | number,
  width?: string | number,
  maxWidth?: string | number,
  align?: 'center',
  hAlign?: 'start' | 'center' | 'end',
  vAlign?: 'start' | 'center',
  shouldGrow?: boolean,
  stretchToFill?: boolean,
  children: ReactNode,
}

export const Vertical = component(
  startWithType<TVertical>()
)(({
  align,
  children,
  hAlign,
  vAlign,
  shouldGrow,
  maxWidth,
  height,
  width,
  stretchToFill,
}) => (
  <View
    role="vertical"
    style={{
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      maxWidth,
      height,
      width,
      flexGrow: (shouldGrow !== undefined && shouldGrow)
        ? 1
        : undefined,
      ...align !== undefined
        ? { justifyContent: align }
        : {},
      ...hAlign !== undefined
        ? {
          alignItems: elegir(
            hAlign === 'start', 'flex-start',
            hAlign === 'center', 'center',
            hAlign === 'end', 'flex-'
          ),
        }
        : {},
      ...stretchToFill !== undefined
        ? {
          flex: 1,
        }
        : {},
      ...vAlign !== undefined
        ? {
          justifyContent: elegir(
            vAlign === 'start', 'flex-start',
            vAlign === 'center', 'center'
          ),
        }
        : {},
    }}
  >
    {children}
  </View>
))
