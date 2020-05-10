import React from 'react'
import { TComponentConfig } from 'autoprops'
import { Text } from '@apparatus/blocks-molecules-text'
import { TEXT_LEVEL_SECONDARY_TITLE } from '@apparatus/blocks-particles-text-levels'
import { ContextParentSizeProvider, TContextParentSize } from '@apparatus/blocks-contexts-parent-size'
import { FullCover } from './src'

export const config: TComponentConfig<TContextParentSize> = {
  props: {
    parentHeight: [812, 640],
    parentWidth: [375, 480],
  },
  required: ['parentHeight', 'parentWidth'],
}

export const Component = ({ parentHeight, parentWidth }: TContextParentSize) => (
  <ContextParentSizeProvider parentHeight={parentHeight} parentWidth={parentWidth}>
    <FullCover>
      <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
        Demonstration
      </Text>
    </FullCover>
  </ContextParentSizeProvider>
)

export { default as packageJson } from './package.json'
