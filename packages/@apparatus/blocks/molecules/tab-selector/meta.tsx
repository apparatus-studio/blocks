import React from 'react'
import { TComponentConfig } from 'autoprops'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { TabSelector, TTabSelector } from './src'

export const config: TComponentConfig<TTabSelector> = {
  props: {
    options: [
      [
        { label: 'Today', value: 'today' },
        { label: 'This month', value: 'this-month' },
        { label: 'Total', value: 'total' },
      ],
    ],
    onChange: [() => {}],
    value: [
      'today',
      'this-month',
      'total',
    ],
  },
  required: ['options', 'onChange', 'value'],
}

export const Component = (props: TTabSelector) => (
  <Horizontal width={360}>
    <TabSelector {...props}/>
  </Horizontal>
)

export { default as packageJson } from './package.json'
