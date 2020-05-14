import React from 'react'
import { TComponentConfig } from 'autoprops'
import { Text } from '@apparatus/blocks-molecules-text'
import { TEXT_LEVEL_SECONDARY_TITLE, TEXT_LEVEL_BODY } from '@apparatus/blocks-particles-text-levels'
import { ContextParentSizeProvider, TContextParentSize } from '@apparatus/blocks-contexts-parent-size'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { FullCover } from '@apparatus/blocks-molecules-full-cover'
import { Bottom } from './src'

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
      <Bottom multiplier={10}>
        <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
          Demonstration
        </Text>
        <AtomSpacer multiplier={4}/>
        <Text level={TEXT_LEVEL_BODY}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et elit efficitur, vestibulum quam non, porttitor arcu. Phasellus molestie massa non metus cursus, ac mollis lectus faucibus. In purus diam, consequat id tellus vitae, ultrices hendrerit est. Phasellus semper, nisi a pulvinar vulputate, elit erat eleifend justo, nec suscipit mauris nisi a nulla. Suspendisse eleifend nibh sed massa aliquet, ut ornare diam elementum. Integer porttitor, ante nec tincidunt consequat, lorem mauris consequat nulla, ac rutrum neque massa et justo. Nulla imperdiet tristique arcu, ac laoreet sapien tincidunt eget. Quisque mattis libero elit. Morbi ut tortor vel metus commodo varius. Cras euismod ultrices eros vel semper.
        </Text>
      </Bottom>
    </FullCover>
  </ContextParentSizeProvider>
)

export { default as packageJson } from './package.json'
