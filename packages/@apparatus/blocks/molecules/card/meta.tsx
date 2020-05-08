import { TComponentConfig } from 'autoprops'
import { Card, TCard } from './src'

export const config: TComponentConfig<TCard> = {
  props: {
    action: ['View reports'],
    description: ['You’ve worked 10 hours and generated 10 k SEK today'],
    onSelect: [() => {}],
    title: ['Spotify', 'iZettle'],
  },
  required: [
    'action',
    'description',
    'onSelect',
    'title',
  ],
}

export const Component = Card

export { default as packageJson } from './package.json'
