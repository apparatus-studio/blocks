import React, { ReactNode } from 'react'
import { component, startWithType, mapContext } from 'refun'
import { Button } from '@primitives/button'
import { View } from '@primitives/view'
import { ContextParentSize } from '@apparatus/blocks-contexts-parent-size'

export type TOverlay = {
  children: ReactNode,
  onPress?: () => void,
}

export const Overlay = component(
  startWithType<TOverlay>(),
  mapContext(ContextParentSize)
)(({
  children,
  onPress,
  parentHeight,
  parentWidth,
}) => (
  <View
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
    }}
  >
    <View
      style={{
        position: 'relative',
        left: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        width: parentWidth,
        height: parentHeight,
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Button onPress={onPress}>
          <View
            style={{
              width: parentWidth,
              height: parentHeight,
            }}
          />
        </Button>
      </View>
    </View>
    {children}
  </View>
))

Overlay.displayName = 'Overlay'
