import React from 'react'
import { TComponentConfig } from 'autoprops'
import { Text } from '@apparatus/blocks-molecules-text'
import { TEXT_LEVEL_SECONDARY_TITLE, TEXT_LEVEL_BODY } from '@apparatus/blocks-particles-text-levels'
import { ContextParentSizeProvider, TContextParentSize } from '@apparatus/blocks-contexts-parent-size'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { FullCover } from '@apparatus/blocks-molecules-full-cover'
import { MainScrollable } from './src'

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
      <MainScrollable multiplier={10}>
        <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
          Demonstration
        </Text>
        <AtomSpacer multiplier={4}/>
        <Text level={TEXT_LEVEL_BODY}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et elit efficitur, vestibulum quam non, porttitor arcu. Phasellus molestie massa non metus cursus, ac mollis lectus faucibus. In purus diam, consequat id tellus vitae, ultrices hendrerit est. Phasellus semper, nisi a pulvinar vulputate, elit erat eleifend justo, nec suscipit mauris nisi a nulla. Suspendisse eleifend nibh sed massa aliquet, ut ornare diam elementum. Integer porttitor, ante nec tincidunt consequat, lorem mauris consequat nulla, ac rutrum neque massa et justo. Nulla imperdiet tristique arcu, ac laoreet sapien tincidunt eget. Quisque mattis libero elit. Morbi ut tortor vel metus commodo varius. Cras euismod ultrices eros vel semper.
        </Text>
        <AtomSpacer multiplier={1}/>
        <Text level={TEXT_LEVEL_BODY}>
          Pellentesque porta nunc a felis egestas mollis. Fusce lobortis arcu sit amet hendrerit lobortis. Proin hendrerit lectus mi, non consequat sem faucibus quis. Nulla feugiat placerat ipsum et accumsan. Aenean eros nulla, gravida ut suscipit vel, sollicitudin porta nibh. Sed eget dolor diam. Mauris turpis magna, blandit eget augue quis, ultrices malesuada eros. Vestibulum at justo odio. Ut sed convallis purus.
        </Text>
        <AtomSpacer multiplier={1}/>
        <Text level={TEXT_LEVEL_BODY}>
          Curabitur interdum posuere ipsum, sit amet volutpat magna finibus vel. Mauris id tincidunt urna. Curabitur ac faucibus sapien, ac eleifend sapien. Aliquam ex enim, suscipit non nunc sed, vehicula tempus risus. Ut ultricies nisi et metus blandit commodo. Mauris ultrices velit at purus sodales molestie. Integer ac enim id odio efficitur dignissim. Duis eu eros eget nulla condimentum luctus ac non elit. Nullam lacus elit, egestas id tempus sed, pharetra eu nisi. Fusce semper eget ligula a feugiat. Etiam ultricies orci venenatis arcu mattis porta. Morbi posuere consectetur turpis ut vulputate. Vivamus sapien risus, tristique ut consectetur at, sagittis in nunc. Integer sodales sem tincidunt consectetur maximus. Sed et gravida augue.
        </Text>
      </MainScrollable>
    </FullCover>
  </ContextParentSizeProvider>
)

export { default as packageJson } from './package.json'
