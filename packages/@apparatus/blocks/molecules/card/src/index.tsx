import React from 'react'
import { elegir } from 'elegir'
import {
  component,
  mapContext,
  mapHandlers,
  mapHovered,
  mapKeyboardFocused,
  mapPressed,
  startWithType,
  TMapFocused,
  TMapHovered,
  TMapPressed,
} from 'refun'
import { Button as PrimitiveButton } from '@primitives/button'
import { Text } from '@apparatus/blocks-molecules-text'
import { TEXT_LEVEL_BODY, TEXT_LEVEL_PRIMARY_TITLE } from '@apparatus/blocks-particles-text-levels'
import { AtomText } from '@apparatus/blocks-atoms-text'
import { AtomIcon } from '@apparatus/blocks-atoms-icon'
import { ICON_NAMES_ARROW_RIGHT } from '@apparatus/blocks-particles-icon-names'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import { ContextInterface, ContextInterfaceProvider } from '@apparatus/blocks-contexts-interface'
import { INTERFACE_CONTEXT_REGULAR, INTERFACE_CONTEXT_ACCENT } from '@apparatus/blocks-particles-interface-contexts'

export type TCard = {
  title: string,
  description: string,
  action: string,
  onSelect: (name: string) => void,
} & TMapFocused
  & TMapHovered
  & TMapPressed

export const Card = component(
  startWithType<TCard>(),
  mapContext(ContextInterface),
  mapKeyboardFocused,
  mapHovered,
  mapPressed,
  mapHandlers({
    onPress: ({ onSelect, title }) => () => {
      onSelect(title)
    },
  })
)(({
  onPointerEnter,
  onPointerLeave,
  onPressIn,
  onPressOut,
  onBlur,
  onFocus,
  onPress,
  isHovered,
  isPressed,
  interfaceContext,
  title,
  description,
  action,
}) => (
  <ContextInterfaceProvider
    interfaceContext={elegir(
      interfaceContext === INTERFACE_CONTEXT_ACCENT,
      INTERFACE_CONTEXT_REGULAR,
      true,
      INTERFACE_CONTEXT_ACCENT
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
      <Horizontal>
        <AtomBackground
          isHovered={isHovered}
          isPressed={isPressed}
          multiplier={6}
        />
        <Horizontal vAlign="center">
          <AtomSpacer multiplier={6}/>
          <Vertical hAlign="center" width={180}>
            <AtomSpacer multiplier={6}/>
            <Vertical hAlign="start" width={180}>
              <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
                {title}
              </Text>
              <AtomSpacer multiplier={4}/>
              <Text level={TEXT_LEVEL_BODY}>
                {description}
              </Text>
              <AtomSpacer multiplier={10}/>
              <AtomSpacer multiplier={10}/>
              <AtomSpacer multiplier={10}/>
              <Horizontal width="100%">
                <Vertical shouldGrow hAlign="start">
                  <AtomSpacer multiplier={1}/>
                  <Text level={TEXT_LEVEL_BODY}>
                    <AtomText level={TEXT_LEVEL_BODY}>
                      {action}
                    </AtomText>
                  </Text>
                  <AtomSpacer multiplier={1}/>
                </Vertical>
                <AtomIcon name={ICON_NAMES_ARROW_RIGHT}/>
              </Horizontal>
            </Vertical>
            <AtomSpacer multiplier={6}/>
          </Vertical>
          <AtomSpacer multiplier={6}/>
        </Horizontal>
      </Horizontal>
    </PrimitiveButton>
  </ContextInterfaceProvider>
))

Card.displayName = 'Card'
