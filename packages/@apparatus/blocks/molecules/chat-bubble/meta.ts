import { TComponentConfig } from 'autoprops'
import { ChatBubble, TChatBubble } from './src'

export const config: TComponentConfig<TChatBubble> = {
  props: {
    containerWidth: [230, 400],
    children: [
      'Show me',
      'There are many variations of passages of Lorem Ipsum',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in',
    ],
    direction: ['left', 'right'],
  },
  required: ['children', 'containerWidth', 'direction'],
}

export const Component = ChatBubble

Component.displayName = ChatBubble.displayName

export { default as packageJson } from './package.json'
