import React from 'react'
import { component, startWithType, mapHandlers, mapContext } from 'refun'
import { Button } from '@primitives/button'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { Text } from '@apparatus/blocks-molecules-text'
import { ContextInterfaceProvider, ContextInterface } from '@apparatus/blocks-contexts-interface'
import { INTERFACE_CONTEXT_ACCENT } from '@apparatus/blocks-particles-interface-contexts'
import { TEXT_LEVEL_BODY } from '@apparatus/blocks-particles-text-levels'
import { View } from '@primitives/view'

export type TTabSelectorOption = {
  isSelected?: boolean,
  label: string,
  onPress: (value: string) => void,
  value: string,
}

export const TabSelectorOption = component(
  startWithType<TTabSelectorOption>(),
  mapHandlers({
    onPress: ({ onPress, value, isSelected }) => () => {
      if (isSelected === undefined || !isSelected) {
        onPress(value)
      }
    },
  }),
  mapContext(ContextInterface)
)(({
  isSelected,
  interfaceContext,
  label,
  onPress,
}) => (
  <ContextInterfaceProvider
    interfaceContext={
      isSelected
        ? INTERFACE_CONTEXT_ACCENT
        : interfaceContext
    }
  >
    <View style={{ position: 'relative' }}>
      <AtomBackground multiplier={3}/>
      <Vertical hAlign="center">
        <AtomSpacer multiplier={2}/>
        <Horizontal vAlign="center">
          <AtomSpacer multiplier={5}/>
          <Vertical hAlign="center">
            <AtomSpacer multiplier={1}/>
            <Text level={TEXT_LEVEL_BODY}>{label}</Text>
            <AtomSpacer multiplier={1}/>
          </Vertical>
          <AtomSpacer multiplier={5}/>
        </Horizontal>
        <AtomSpacer multiplier={2}/>
      </Vertical>

      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <Button onPress={onPress}>
          <View
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Button>
      </View>
    </View>
  </ContextInterfaceProvider>
))

TabSelectorOption.displayName = 'TabSelectorOption'
