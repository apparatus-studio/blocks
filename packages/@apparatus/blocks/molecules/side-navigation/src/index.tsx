import React, { useState, ReactElement, useEffect, useRef } from 'react'
import { component, startWithType, mapContext } from 'refun'
import { Animation, easeInCubic } from '@primitives/animation'
import { ContextParentSize } from '@apparatus/blocks-contexts-parent-size'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { View } from '@apparatus/blocks-utils-view'

export type TSideNavigation = {
  isReversed?: boolean,
  Component: () => ReactElement,
}

export const SideNavigation = component(
  startWithType<TSideNavigation>(),
  mapContext(ContextParentSize)
)(({
  Component,
  isReversed,
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
        {([translateX]) => (
          NewComponentRef.current !== undefined
            ? (
              <View
                left={0}
                height={parentHeight}
                isAbsolute
                top={0}
                transform={[
                  { translateX: isReversed !== undefined && isReversed ? -translateX : translateX },
                ]}
                width={parentWidth}
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

