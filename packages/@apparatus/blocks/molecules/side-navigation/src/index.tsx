import React, { FC } from 'react'
import { component, startWithType, mapContext } from 'refun'
import { Animation, easeInCubic } from '@primitives/animation'
import { ContextParentSize } from '@apparatus/blocks-contexts-parent-size'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'

export type TSideNavigation = {
  children: FC[],
  selected: number,
}

export const SideNavigation = component(
  startWithType<TSideNavigation>(),
  mapContext(ContextParentSize)
)(({
  children,
  parentHeight,
  parentWidth,
  selected,
}) => (
  <Horizontal
    hAlign="start"
    vAlign="start"
    height={parentHeight}
    width={parentWidth}
  >
    <Animation
      easing={easeInCubic}
      time={150}
      values={[-(parentWidth * selected)]}
    >
      {([translateX]) => (
        <Horizontal
          hAlign="start"
          vAlign="start"
          height={parentHeight}
          width={parentWidth * children.length}
          translateX={translateX}
        >
          {children.map((Component, index) => (
            <Component key={index}/>
          ))}
        </Horizontal>
      )}
    </Animation>
  </Horizontal>
))

SideNavigation.displayName = 'SideNavigation'
