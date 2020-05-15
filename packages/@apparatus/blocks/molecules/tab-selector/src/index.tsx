import React from 'react'
import { component, startWithType, mapContext } from 'refun'
import { TOmitKey } from 'tsfn'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { ContextInterfaceProvider, ContextInterface } from '@apparatus/blocks-contexts-interface'
import { INTERFACE_CONTEXT_REGULAR, INTERFACE_CONTEXT_MIDTONE } from '@apparatus/blocks-particles-interface-contexts'
import { TabSelectorOption, TTabSelectorOption } from './TabSelectorOption'

export type TTabSelector = {
  options: TOmitKey<TTabSelectorOption, 'onPress'>[],
  onChange: (value: string) => void,
  value: string,
}

export const TabSelector = component(
  startWithType<TTabSelector>(),
  mapContext(ContextInterface)
)(({
  interfaceContext,
  onChange,
  options,
  value,
}) => (
  <ContextInterfaceProvider
    interfaceContext={
      interfaceContext === INTERFACE_CONTEXT_REGULAR
        ? INTERFACE_CONTEXT_MIDTONE
        : INTERFACE_CONTEXT_REGULAR
    }
  >
    <Vertical>
      <AtomBackground multiplier={3}/>
      <AtomSpacer multiplier={1}/>
      <Horizontal>
        <Horizontal vAlign="center">
          <AtomSpacer multiplier={1}/>
          <Horizontal>
            {options.map((option) => (
              <TabSelectorOption
                key={option.value}
                value={option.value}
                label={option.label}
                isSelected={option.value === value}
                onPress={onChange}
              />
            ))}
          </Horizontal>
          <AtomSpacer multiplier={1}/>
        </Horizontal>
      </Horizontal>
      <AtomSpacer multiplier={1}/>
    </Vertical>
  </ContextInterfaceProvider>
))

TabSelector.displayName = 'TabSelector'
