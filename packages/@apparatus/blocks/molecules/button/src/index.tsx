import React, { ReactNode } from 'react'
import { component, startWithType, TMapFocused, TMapHovered, mapContext, mapKeyboardFocused, mapPressed, mapHovered, TMapPressed } from 'refun'
import { elegir } from 'elegir'
import { Button as PrimitiveButton } from '@primitives/button'
import { Text } from '@apparatus/blocks-molecules-text'
import { TEXT_LEVEL_BODY } from '@apparatus/blocks-particles-text-levels'
import { TButtonLevel, BUTTON_LEVEL_PRIMARY } from '@apparatus/blocks-particles-button-levels'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { TIconNames } from '@apparatus/blocks-particles-icon-names'
import { ContextInterface, ContextInterfaceProvider } from '@apparatus/blocks-contexts-interface'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import { INTERFACE_CONTEXT_REGULAR, INTERFACE_CONTEXT_ACCENT } from '@apparatus/blocks-particles-interface-contexts'
import { AtomIcon } from '@apparatus/blocks-atoms-icon'

export type TButton = {
  children: ReactNode,
  level: TButtonLevel,
  icon?: TIconNames,
  onPress?: () => void,
} & TMapFocused
  & TMapHovered
  & TMapPressed

export const Button = component(
  startWithType<TButton>(),
  mapContext(ContextInterface),
  mapKeyboardFocused,
  mapHovered,
  mapPressed
)(({
  children,
  icon,
  interfaceContext,
  isHovered,
  isPressed,
  level,
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
      level === BUTTON_LEVEL_PRIMARY,
      elegir(
        interfaceContext === INTERFACE_CONTEXT_ACCENT,
        INTERFACE_CONTEXT_REGULAR,
        true,
        INTERFACE_CONTEXT_ACCENT
      ),
      true,
      interfaceContext
    )}
  >
    <PrimitiveButton
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <Horizontal hAlign="center" vAlign="center" shouldGrow>
        <AtomBackground
          multiplier={3}
          isHovered={isHovered}
          isPressed={isPressed}
        />
        <Horizontal hAlign="center" vAlign="center">
          <AtomSpacer multiplier={5}/>
          <Vertical hAlign="center" vAlign="center">
            <AtomSpacer multiplier={4}/>
            <Horizontal vAlign="center">
              {icon && (
                <>
                  <AtomIcon
                    isInteractive
                    name={icon}
                  />
                  <AtomSpacer multiplier={1}/>
                </>
              )}
              <Vertical hAlign="center">
                <AtomSpacer multiplier={1}/>
                <Horizontal>
                  <Text isInteractive level={TEXT_LEVEL_BODY}>
                    {children}
                  </Text>
                </Horizontal>
                <AtomSpacer multiplier={1}/>
              </Vertical>
            </Horizontal>
            <AtomSpacer multiplier={4}/>
          </Vertical>
          <AtomSpacer multiplier={5}/>
        </Horizontal>
      </Horizontal>
    </PrimitiveButton>
  </ContextInterfaceProvider>
))

Button.displayName = 'Button'
