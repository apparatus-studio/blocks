import React from 'react'
import { TComponentConfig } from 'autoprops'
import {
  TEXT_LEVEL_PRIMARY_TITLE,
  TEXT_LEVEL_SECONDARY_TITLE,
  TEXT_LEVEL_TERTIARY_TITLE,
  TEXT_LEVEL_LABEL,
  TEXT_LEVEL_ERROR_LABEL,
  TEXT_LEVEL_SMALL_LABEL,
  TEXT_LEVEL_BODY,
} from '@apparatus/blocks-particles-text-levels'
import { Block } from '@primitives/block'
import { Background } from '@primitives/background'
import { Text, TText } from './src'

type TExample = TText & { showFootprint?: boolean }

export const config: TComponentConfig<TExample> = {
  props: {
    level: [
      TEXT_LEVEL_PRIMARY_TITLE,
      TEXT_LEVEL_SECONDARY_TITLE,
      TEXT_LEVEL_TERTIARY_TITLE,
      TEXT_LEVEL_LABEL,
      TEXT_LEVEL_ERROR_LABEL,
      TEXT_LEVEL_SMALL_LABEL,
      TEXT_LEVEL_BODY,
    ],
    children: [
      'Show me',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in',
    ],
    showFootprint: [true],
  },
  required: ['children', 'level'],
}

export const Component = ({ showFootprint, ...props }: TExample) => (
  <Block width={200} style={{ flexDirection: 'column' }}>
    {showFootprint && <Background color={[255, 160, 160, 0.3]}/>}
    <Text {...props}/>
  </Block>
)

export { default as packageJson } from './package.json'
