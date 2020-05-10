import React, { ReactNode } from 'react'
import { component, startWithType } from 'refun'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { View } from '@primitives/view'
import { ActionSheetGrip } from './ActionSheetGrip'

export type TActionSheet = {
  children: ReactNode,
}

export const ActionSheet = component(
  startWithType<TActionSheet>()
)(({ children }) => (
  <Horizontal>
    <AtomBackground
      topLeftMultiplier={6}
      topRightMultiplier={6}
    />
    <Horizontal vAlign="center">
      <AtomSpacer multiplier={10}/>
      <Vertical hAlign="center">
        <AtomSpacer multiplier={4}/>
        <View style={{ position: 'relative' }}>
          <ActionSheetGrip/>
        </View>
        <AtomSpacer multiplier={10}/>
        <Vertical>
          {children}
        </Vertical>
        <AtomSpacer multiplier={10}/>
      </Vertical>
      <AtomSpacer multiplier={10}/>
    </Horizontal>
  </Horizontal>
))

ActionSheet.displayName = 'ActionSheet'
