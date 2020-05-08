import { TComponentConfig } from 'autoprops'
import { Card, TCard } from './src'

export const config: TComponentConfig<TCard> = {
  props: {
    title: ['Spotify', 'iZettle'],
    description: ['You’ve worked 10 hours and generated 10 k SEK today'],
    action: ['View reports'],
  },
  required: [
    'action',
    'description',
    'title',
  ],
}

export const Component = Card

export { default as packageJson } from './package.json'
