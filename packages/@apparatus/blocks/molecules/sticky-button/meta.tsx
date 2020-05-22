import React from 'react'
import { TComponentConfig } from 'autoprops'
import { ICON_NAMES_CALENDAR, ICON_NAMES_PLUS } from '@apparatus/blocks-particles-icon-names'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { StickyButton, TStickyButton } from './src'

export const config: TComponentConfig<TStickyButton> = {
  props: {
    children: [
      'Nav title',
      'Longer title to test',
    ],
    name: [ICON_NAMES_CALENDAR, ICON_NAMES_PLUS],
    onPress: [() => console.log('Pressed!')],
  },
  required: ['children', 'name'],
}

export const Component = (props: TStickyButton) => (
  <Horizontal width={360}>
    <StickyButton {...props}/>
  </Horizontal>
)

export { default as packageJson } from './package.json'
