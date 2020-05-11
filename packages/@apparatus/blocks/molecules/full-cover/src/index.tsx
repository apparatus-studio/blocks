import React, { ReactNode } from 'react'
import { component, startWithType, mapContext } from 'refun'
import { ContextParentSize } from '@apparatus/blocks-contexts-parent-size'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { AtomBackground } from '@apparatus/blocks-atoms-background'

export type TFullCover = {
  children: ReactNode,
}

export const FullCover = component(
  startWithType<TFullCover>(),
  mapContext(ContextParentSize)
)(({
  children,
  parentHeight,
  parentWidth,
}) => (
  <Vertical
    hAlign="start"
    vAlign="start"
    height={parentHeight}
    width={parentWidth}
  >
    <AtomBackground multiplier={0}/>
    <Vertical
      height={parentHeight}
      width={parentWidth}
    >
      {children}
    </Vertical>
  </Vertical>
))

FullCover.displayName = 'FullCover'
