import React from 'react'
import { component, startWithType, mapContext } from 'refun'
import { View } from '@primitives/view'
import { GRID } from '@apparatus/blocks-themes-default-tokens'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import { ContextInterface, ContextInterfaceProvider } from '@apparatus/blocks-contexts-interface'
import { INTERFACE_CONTEXT_MIDTONE, INTERFACE_CONTEXT_REGULAR } from '@apparatus/blocks-particles-interface-contexts'

export type TActionSheetGrip = {}

export const ActionSheetGrip = component(
  startWithType<TActionSheetGrip>(),
  mapContext(ContextInterface)
)(({ interfaceContext }) => (
  <ContextInterfaceProvider
    interfaceContext={
      interfaceContext === INTERFACE_CONTEXT_REGULAR
        ? INTERFACE_CONTEXT_MIDTONE
        : INTERFACE_CONTEXT_REGULAR
    }
  >
    <View
      style={{
        display: 'flex',
        height: GRID,
        width: GRID * 10,
      }}
    >
      <AtomBackground multiplier={3}/>
    </View>
  </ContextInterfaceProvider>
))
