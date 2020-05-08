import React from 'react'
import { component, startWithType, mapContext } from 'refun'
import { View } from '@primitives/view'
import { TThemeableSpacer } from '@themeables/spacer'
import { createThemeableSpacer } from '@apparatus/blocks-contexts-theme'
import { ContextDebug } from '@apparatus/blocks-contexts-debug'

export type TAtomSpacer = {
  multiplier: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
}

export const Spacer = component(
  startWithType<TThemeableSpacer>(),
  mapContext(ContextDebug)
)(({ blockStart, inlineStart, shouldDebug }) => (
  <View
    style={{
      display: 'flex',
      width: inlineStart !== undefined ? inlineStart : 1,
      height: blockStart !== undefined ? blockStart : 1,
      ...shouldDebug
        ? { backgroundColor: 'rgba(255, 0, 0, 0.5)' }
        : {},
    }}
  />
))

export const AtomSpacer = createThemeableSpacer<TThemeableSpacer>('Spacer', Spacer)
