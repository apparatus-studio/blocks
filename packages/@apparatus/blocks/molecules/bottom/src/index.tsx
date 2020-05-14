import React, { ReactNode } from 'react'
import { component, startWithType, mapContext } from 'refun'
import { View } from '@primitives/view'
import { ContextParentSize } from '@apparatus/blocks-contexts-parent-size'
import { AtomContainer } from '@apparatus/blocks-atoms-container'

export type TBottom = {
  children: ReactNode,
  multiplier: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
}

export const Bottom = component(
  startWithType<TBottom>(),
  mapContext(ContextParentSize)
)(({
  children,
  multiplier,
}) => (
  <View
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    }}
  >
    <AtomContainer multiplier={multiplier}>
      {children}
    </AtomContainer>
  </View>
))

Bottom.displayName = 'Bottom'
