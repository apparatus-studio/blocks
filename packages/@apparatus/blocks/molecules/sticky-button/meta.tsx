import React from 'react'
import { TComponentConfig } from 'autoprops'
import { View } from '@primitives/view'
import { ICON_NAMES_CALENDAR, ICON_NAMES_PLUS } from '@apparatus/blocks-particles-icon-names'
import { StickyButton, TStickyButton } from './src'

export const config: TComponentConfig<TStickyButton> = {
  props: {
    children: ['Nav title'],
    name: [ICON_NAMES_CALENDAR, ICON_NAMES_PLUS],
  },
  required: ['children', 'name'],
}

export const Component = (props: TStickyButton) => (
  <View style={{ width: 300 }}>
    <StickyButton {...props}/>
  </View>
)

export { default as packageJson } from './package.json'
