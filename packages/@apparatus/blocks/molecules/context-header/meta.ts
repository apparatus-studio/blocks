import { TComponentConfig } from 'autoprops'
import { ContextHeader, TContextHeader } from './src'

export const config: TComponentConfig<TContextHeader> = {
  props: {
    onBack: [() => {}],
    onClose: [() => {}],
    onMore: [() => {}],
    children: ['ACME Inc'],
  },
  required: ['children'],
  mutex: [
    ['onClose', 'onMore'],
  ],
}

export const Component = ContextHeader

export { default as packageJson } from './package.json'
