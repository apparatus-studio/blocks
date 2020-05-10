import React from 'react'
import { TComponentConfig } from 'autoprops'
import { Text } from '@apparatus/blocks-molecules-text'
import { TEXT_LEVEL_SECONDARY_TITLE } from '@apparatus/blocks-particles-text-levels'
import { ContextParentSizeProvider } from '@apparatus/blocks-contexts-parent-size'
import { FullCover } from '@apparatus/blocks-molecules-full-cover'
import { ContextInterfaceProvider } from '@apparatus/blocks-contexts-interface'
import {
  INTERFACE_CONTEXT_REGULAR,
  INTERFACE_CONTEXT_ACCENT,
  INTERFACE_CONTEXT_SUCCESS,
} from '@apparatus/blocks-particles-interface-contexts'
import { SideNavigation, TSideNavigation } from './src'

const First = () => (
  <ContextInterfaceProvider interfaceContext={INTERFACE_CONTEXT_ACCENT}>
    <FullCover>
      <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
        First
      </Text>
    </FullCover>
  </ContextInterfaceProvider>
)
const Second = () => (
  <ContextInterfaceProvider interfaceContext={INTERFACE_CONTEXT_REGULAR}>
    <FullCover>
      <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
        Second
      </Text>
    </FullCover>
  </ContextInterfaceProvider>
)
const Third = () => (
  <ContextInterfaceProvider interfaceContext={INTERFACE_CONTEXT_SUCCESS}>
    <FullCover>
      <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
        Third
      </Text>
    </FullCover>
  </ContextInterfaceProvider>
)

export const config: TComponentConfig<TSideNavigation> = {
  props: {
    children: [
      [
        First,
        Second,
        Third,
      ],
    ],
    selected: [0, 1, 2],
  },
  required: ['children', 'selected'],
}

export const Component = (props: TSideNavigation) => (
  <ContextParentSizeProvider parentHeight={812} parentWidth={375}>
    <SideNavigation {...props}/>
  </ContextParentSizeProvider>
)

export { default as packageJson } from './package.json'
