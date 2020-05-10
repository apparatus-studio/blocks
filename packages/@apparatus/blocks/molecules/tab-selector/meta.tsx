import React from 'react'
import { TComponentConfig } from 'autoprops'
import { View } from '@primitives/view'
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
  <View style={{ width: 300 }}>
    <TabSelector {...props}/>
  </View>
)

export { default as packageJson } from './package.json'
