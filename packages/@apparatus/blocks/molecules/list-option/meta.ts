import { TComponentConfig } from 'autoprops'
import { ListOption, TListOption } from './src'

export const config: TComponentConfig<TListOption> = {
  props: {
    onPress: [() => {}],
    optionName: ['Sweden', 'Norway'],
    isFirst: [true],
    value: ['SEK/kr'],
    code: ['SEK'],
  },
  required: ['optionName', 'onPress'],
}

export const Component = ListOption

export { default as packageJson } from './package.json'
