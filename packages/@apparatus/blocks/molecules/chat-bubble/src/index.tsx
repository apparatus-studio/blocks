import React, { ReactNode } from 'react'
import { component, startWithType, mapContext } from 'refun'
import { elegir } from 'elegir'
import { Text } from '@apparatus/blocks-molecules-text'
import { TEXT_LEVEL_BODY } from '@apparatus/blocks-particles-text-levels'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import { INTERFACE_CONTEXT_ACCENT, INTERFACE_CONTEXT_REGULAR, INTERFACE_CONTEXT_MIDTONE } from '@apparatus/blocks-particles-interface-contexts'
import { ContextInterfaceProvider, ContextInterface } from '@apparatus/blocks-contexts-interface'
import { GRID } from '@apparatus/blocks-themes-default-tokens'

export type TChatBubble = {
  direction: 'left' | 'right',
  containerWidth: number,
  children: ReactNode,
}

export const ChatBubble = component(
  startWithType<TChatBubble>(),
  mapContext(ContextInterface)
)(({
  children,
  direction,
  containerWidth,
  interfaceContext,
}) => (
  <ContextInterfaceProvider
    interfaceContext={elegir(
      direction === 'right',
      INTERFACE_CONTEXT_MIDTONE,
      interfaceContext === INTERFACE_CONTEXT_ACCENT,
      INTERFACE_CONTEXT_REGULAR,
      true,
      INTERFACE_CONTEXT_ACCENT
    )}
  >
    <Horizontal>
      <AtomBackground
        topLeftMultiplier={direction === 'left' ? 6 : 12}
        topRightMultiplier={direction === 'right' ? 6 : 12}
        bottomLeftMultiplier={direction === 'left' ? 0 : 12}
        bottomRightMultiplier={direction === 'right' ? 0 : 12}
      />
      <Horizontal vAlign="center">
        <AtomSpacer multiplier={5}/>
        <Vertical hAlign="center" maxWidth={containerWidth - GRID * 6}>
          <AtomSpacer multiplier={4}/>
          <Text level={TEXT_LEVEL_BODY}>
            {children}
          </Text>
          <AtomSpacer multiplier={4}/>
        </Vertical>
        <AtomSpacer multiplier={5}/>
      </Horizontal>
    </Horizontal>
  </ContextInterfaceProvider>
))

ChatBubble.displayName = 'ChatBubble'
