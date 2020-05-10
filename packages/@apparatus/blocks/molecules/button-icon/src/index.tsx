import React from 'react'
import { component, startWithType, TMapFocused, TMapHovered, TMapPressed } from 'refun'
import { Button } from '@primitives/button'
import { TIconNames } from '@apparatus/blocks-particles-icon-names'
import { AtomIcon } from '@apparatus/blocks-atoms-icon'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'

export type TButtonIcon = {
  accessibilityLabel?: string,
  name?: TIconNames,
  onPress?: () => void,
} & TMapFocused
  & TMapHovered
  & TMapPressed

export const ButtonIcon = component(
  startWithType<TButtonIcon>()
)(({
  name,
  onPressIn,
  onPressOut,
  onPointerEnter,
  onPointerLeave,
  onBlur,
  onFocus,
  onPress,
}) => (
  <Horizontal>
    <Button
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <AtomIcon
        isInteractive
        name={name}
      />
    </Button>
  </Horizontal>
))

ButtonIcon.displayName = 'ButtonIcon'
