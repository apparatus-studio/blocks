import React, { ReactNode } from 'react'
import { component, startWithType } from 'refun'
import { AtomText } from '@apparatus/blocks-atoms-text'
import { TTextLevel } from '@apparatus/blocks-particles-text-levels'
import { AtomFootprint } from '@apparatus/blocks-atoms-footprint'

export type TText = {
  level: TTextLevel,
  isInteractive?: boolean,
  children: ReactNode,
}

export const Text = component(
  startWithType<TText>()
)(({ children, level, isInteractive }) => (
  <AtomFootprint level={level}>
    <AtomText isInteractive={isInteractive} level={level}>
      {children}
    </AtomText>
  </AtomFootprint>
))

Text.displayName = 'Text'
