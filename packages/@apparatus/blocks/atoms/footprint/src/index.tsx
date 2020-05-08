import React, { FC, ReactNode } from 'react'
import { startWithType, mapContext, component } from 'refun'
import { View } from '@primitives/view'
import { TThemeableSpacer } from '@themeables/spacer'
import { TTextLevel } from '@apparatus/blocks-particles-text-levels'
import { createThemeableSpacer } from '@apparatus/blocks-contexts-theme'
import { ContextInterface } from '@apparatus/blocks-contexts-interface'

export type TAtomFootprint = {
  level: TTextLevel,
  children: ReactNode,
}

type TFootprint = {
  children: ReactNode,
} & TThemeableSpacer

const Footprint: FC<TFootprint> = ({ blockStart, blockEnd, children }) => (
  <View
    style={{
      display: 'flex',
      ...(blockStart !== undefined && blockEnd !== undefined)
        ? {
          marginTop: -blockStart,
          paddingTop: 0,
          marginBottom: -blockEnd,
        }
        : {},
    }}
  >
    {children}
  </View>
)

export const AtomFootprint = component(
  startWithType<TAtomFootprint>(),
  mapContext(ContextInterface)
)(
  createThemeableSpacer<TThemeableSpacer>(
    'Footprint',
    Footprint
  )
)

AtomFootprint.displayName = 'AtomFootprint'
