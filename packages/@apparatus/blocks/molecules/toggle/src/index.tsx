import React from 'react'
import {
  component,
  mapDefaultProps,
  mapHovered,
  mapKeyboardFocused,
  mapPressed,
  startWithType,
  TMapFocused,
  TMapHovered,
  TMapPressed,
  mapContext,
} from 'refun'
import { elegir } from 'elegir'
import { Button } from '@primitives/button'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import {
  ContextInterface,
  ContextInterfaceProvider,
} from '@apparatus/blocks-contexts-interface'
import { INTERFACE_CONTEXT_REGULAR, INTERFACE_CONTEXT_ACCENT, INTERFACE_CONTEXT_MIDTONE } from '@apparatus/blocks-particles-interface-contexts'

export type TToggle = {
  isChecked?: boolean,
  onPress?: () => void,
} & TMapFocused
  & TMapHovered
  & TMapPressed

export const Toggle = component(
  startWithType<TToggle>(),
  mapDefaultProps({
    isChecked: false,
  }),
  mapContext(ContextInterface),
  mapKeyboardFocused,
  mapHovered,
  mapPressed
)(({
  interfaceContext,
  isChecked,
  isHovered,
  isPressed,
  onPointerEnter,
  onPointerLeave,
  onPressIn,
  onPressOut,
  onBlur,
  onFocus,
  onPress,
}) => (
  <ContextInterfaceProvider
    interfaceContext={elegir(
      !isChecked,
      INTERFACE_CONTEXT_MIDTONE,
      interfaceContext === INTERFACE_CONTEXT_ACCENT,
      INTERFACE_CONTEXT_REGULAR,
      true,
      INTERFACE_CONTEXT_ACCENT
    )}
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
      <Vertical hAlign="center">
        <AtomBackground
          isHovered={isHovered}
          isPressed={isPressed}
          multiplier={12}
        />
        <AtomSpacer multiplier={1}/>
        <Horizontal vAlign="center">
          <AtomSpacer multiplier={1}/>
          {isChecked && <AtomSpacer multiplier={5}/>}
          <ContextInterfaceProvider
            interfaceContext={interfaceContext}
          >
            <Horizontal>
              <AtomBackground multiplier={6}/>
              <AtomSpacer multiplier={5}/>
            </Horizontal>
          </ContextInterfaceProvider>
          {!isChecked && <AtomSpacer multiplier={5}/>}
          <AtomSpacer multiplier={1}/>
        </Horizontal>
        <AtomSpacer multiplier={1}/>
      </Vertical>
    </Button>
  </ContextInterfaceProvider>
))

Toggle.displayName = 'Toggle'
