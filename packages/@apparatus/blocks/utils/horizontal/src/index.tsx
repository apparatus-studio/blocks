import React, { ReactNode } from 'react'
import { elegir } from 'elegir'
import { component, startWithType } from 'refun'
import { View } from '@primitives/view'
import { platformSelect } from '@apparatus/blocks-utils-platform'

export type THorizontal = {
  children: ReactNode,
  hAlign?: 'start' | 'center' | 'end',
  height?: number | string,
  shouldGrow?: boolean,
  spaceBetween?: boolean,
  translateX?: number,
  vAlign?: 'start' | 'center',
  width?: number | string,
}

export const Horizontal = component(
  startWithType<THorizontal>()
)(({
  children,
  hAlign,
  height,
  shouldGrow,
  spaceBetween,
  translateX,
  vAlign,
  width,
}) => (
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
      ...translateX !== undefined
        ? {
          transform: platformSelect({
            web: `translateX(${translateX}px)`,
            native: [{ translateX }] as unknown as string,
          }),
        }
        : {},
    }}
  >
    {children}
  </View>
))
