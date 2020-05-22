import React, { ReactNode } from 'react'
import {
  component,
  mapContext,
  startWithType,
  TMapHovered,
  TMapKeyboardFocused,
  TMapPressed,
  mapKeyboardFocused,
  mapHovered,
  mapPressed,
} from 'refun'
import { elegir } from 'elegir'
import { Button } from '@primitives/button'
import { View } from '@primitives/view'
import { Text } from '@apparatus/blocks-molecules-text'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { TIconNames } from '@apparatus/blocks-particles-icon-names'
import { TEXT_LEVEL_SMALL_LABEL } from '@apparatus/blocks-particles-text-levels'
import { AtomIcon } from '@apparatus/blocks-atoms-icon'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import {
  ContextInterfaceProvider,
  ContextInterface,
} from '@apparatus/blocks-contexts-interface'
import {
  INTERFACE_CONTEXT_ACCENT,
  INTERFACE_CONTEXT_REGULAR,
} from '@apparatus/blocks-particles-interface-contexts'

export type TStickyButton = {
  name: TIconNames,
  children: ReactNode,
  onPress?: () => void,
} & TMapKeyboardFocused
  & TMapHovered
  & TMapPressed

export const StickyButton = component(
  startWithType<TStickyButton>(),
  mapContext(ContextInterface),
  mapKeyboardFocused,
  mapHovered,
  mapPressed
)(({
  children,
  name,
  isHovered,
  isPressed,
  interfaceContext,
  onPointerEnter,
  onPointerLeave,
  onPressIn,
  onPressOut,
  onBlur,
  onFocus,
  onPress,
}) => (
  <View
    style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Horizontal hAlign="center">
      <ContextInterfaceProvider
        interfaceContext={elegir(
          interfaceContext === INTERFACE_CONTEXT_ACCENT,
          INTERFACE_CONTEXT_REGULAR,
          true,
          INTERFACE_CONTEXT_ACCENT
        )}
      >
        <Vertical>
          <AtomBackground
            multiplier={12}
            isHovered={isHovered}
            isPressed={isPressed}
          />
          <Horizontal vAlign="center">
            <AtomSpacer multiplier={4}/>
            <Vertical hAlign="center">
              <AtomSpacer multiplier={4}/>
              <AtomIcon isInteractive name={name}/>
              <AtomSpacer multiplier={4}/>
            </Vertical>
            <AtomSpacer multiplier={4}/>
          </Horizontal>
        </Vertical>
      </ContextInterfaceProvider>
    </Horizontal>

    <AtomSpacer multiplier={4}/>

    <Horizontal hAlign="center">
      <Text level={TEXT_LEVEL_SMALL_LABEL}>
        {children}
      </Text>
    </Horizontal>

    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Button
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Button>
    </View>
  </View>
))

StickyButton.displayName = 'StickyButton'

