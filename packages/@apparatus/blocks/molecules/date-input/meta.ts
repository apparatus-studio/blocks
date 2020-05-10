import { TComponentConfig } from 'autoprops'
import { DateInput, TDateInput } from './src'

export const config: TComponentConfig<TDateInput> = {
  props: {
    value: ['Test'],
    placeholder: ['Add date'],
  },
}

export const Component = DateInput

export { default as packageJson } from './package.json'
