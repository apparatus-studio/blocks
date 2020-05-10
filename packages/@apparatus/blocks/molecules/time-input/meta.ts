import { TComponentConfig } from 'autoprops'
import { TimeInput, TTimeInput } from './src'

export const config: TComponentConfig<TTimeInput> = {
  props: {
    value: ['10.30'],
    placeholder: ['Add time'],
  },
}

export const Component = TimeInput

export { default as packageJson } from './package.json'
