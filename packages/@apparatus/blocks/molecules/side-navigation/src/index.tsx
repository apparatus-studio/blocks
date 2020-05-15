import React, { useState, ReactElement, useEffect, useRef } from 'react'
import { component, startWithType, mapContext } from 'refun'
import { View } from '@primitives/view'
import { Animation, easeInCubic } from '@primitives/animation'
import { ContextParentSize } from '@apparatus/blocks-contexts-parent-size'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'

export type TSideNavigation = {
  Component: () => ReactElement,
}

export const SideNavigation = component(
  startWithType<TSideNavigation>(),
  mapContext(ContextParentSize)
)(({
  Component,
  parentHeight,
  parentWidth,
}) => {
  const ComponentRef = useRef<() => ReactElement>(Component)
  const NewComponentRef = useRef<() => ReactElement>()
  const firstTime = useRef(true)
  const [hasIncoming, setIncoming] = useState(false)

  useEffect(() => {
    if (!firstTime.current) {
      NewComponentRef.current = Component
      setIncoming(true)
    } else {
      firstTime.current = false
    }
  }, [Component])

  return (
    <Horizontal
      hAlign="start"
      vAlign="start"
      height={parentHeight}
      width={parentWidth}
    >
      <ComponentRef.current/>
      <Animation
        easing={easeInCubic}
        time={150}
        values={[hasIncoming ? 0 : parentWidth]}
        shouldNotAnimate={!hasIncoming}
        onAnimationEnd={() => {
          if (NewComponentRef.current !== undefined) {
            ComponentRef.current = NewComponentRef.current
          }

          NewComponentRef.current = undefined
          setIncoming(false)
        }}
      >
        {([xDisplacement]) => (
          NewComponentRef.current !== undefined
            ? (
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: xDisplacement,
                  width: parentWidth,
                  height: parentHeight,
                }}
              >
                <NewComponentRef.current/>
              </View>
            )
            : <View/>
        )}
      </Animation>
    </Horizontal>
  )
})

SideNavigation.displayName = 'SideNavigation'

