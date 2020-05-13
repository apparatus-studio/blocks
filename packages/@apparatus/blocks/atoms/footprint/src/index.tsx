import React, { FC, ReactNode } from 'react'
import { View } from '@primitives/view'
import { TThemeableSpacer } from '@themeables/spacer'
import { TTextLevel } from '@apparatus/blocks-particles-text-levels'
import { createThemeableSpacer } from '@apparatus/blocks-contexts-theme'

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

export const AtomFootprint = createThemeableSpacer<TThemeableSpacer>(
  'Footprint',
  Footprint
)

AtomFootprint.displayName = 'AtomFootprint'
