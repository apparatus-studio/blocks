import React, { ReactNode } from 'react'
import { component, startWithType, mapContext } from 'refun'
import { ContextParentSize } from '@apparatus/blocks-contexts-parent-size'
import { AtomContainer } from '@apparatus/blocks-atoms-container'

export type TMainScrollable = {
  children: ReactNode,
  multiplier?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  multiplierBottom?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  multiplierLeft?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  multiplierRight?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  multiplierTop?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
}

export const MainScrollable = component(
  startWithType<TMainScrollable>(),
  mapContext(ContextParentSize)
)(({
  children,
  multiplier,
  multiplierBottom,
  multiplierLeft,
  multiplierRight,
  multiplierTop,
}) => (
  <AtomContainer
    multiplier={multiplier}
    multiplierBottom={multiplierBottom}
    multiplierLeft={multiplierLeft}
    multiplierRight={multiplierRight}
    multiplierTop={multiplierTop}
    shouldExpandVertically
    shouldPadIOS
    shouldScroll
  >
    {children}
  </AtomContainer>
))

MainScrollable.displayName = 'MainScrollable'
