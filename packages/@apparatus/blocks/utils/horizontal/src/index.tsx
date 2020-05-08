import React, { ReactNode } from 'react'
import { elegir } from 'elegir'
import { component, startWithType } from 'refun'
import { View } from '@primitives/view'

export type THorizontal = {
  height?: number | string,
  width?: number | string,
  shouldGrow?: boolean,
  hAlign?: 'start' | 'center' | 'end',
  vAlign?: 'start' | 'center',
  spaceBetween?: boolean,
  children: ReactNode,
}

export const Horizontal = component(
  startWithType<THorizontal>()
)(({ children, vAlign, height, hAlign, shouldGrow, width, spaceBetween }) => (
  <View
    role="horizontal"
    style={{
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      flexGrow: (shouldGrow !== undefined && shouldGrow)
        ? 1
        : undefined,
      height,
      width,
      ...hAlign !== undefined
        ? {
          justifyContent: elegir(
            hAlign === 'start',
            'flex-start',
            hAlign === 'center',
            'center',
            hAlign === 'end',
            'flex-end'
          ),
        }
        : {},
      ...spaceBetween !== undefined
        ? {
          justifyContent: 'space-between',
        }
        : {},
      ...vAlign !== undefined
        ? {
          alignItems: elegir(
            vAlign === 'start',
            'flex-start',
            vAlign === 'center',
            'center'
          ),
        }
        : {},
    }}
  >
    {children}
  </View>
))
