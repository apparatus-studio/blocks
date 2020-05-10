import { TComponentConfig } from 'autoprops'
import { Text } from '@apparatus/blocks-molecules-text'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { ListOption } from '@apparatus/blocks-molecules-list-option'
import { TEXT_LEVEL_SECONDARY_TITLE } from '@apparatus/blocks-particles-text-levels'
import { ActionSheet, TActionSheet } from './src'

export const config: TComponentConfig<TActionSheet, 'title' | 'spacer' | 'listOption1' | 'listOption2'> = {
  props: {},
  children: {
    title: {
      Component: Text,
      config: {
        props: {
          level: [TEXT_LEVEL_SECONDARY_TITLE],
          children: ['Secondary title'],
        },
        required: ['level', 'children'],
      },
    },
    spacer: {
      Component: AtomSpacer,
      config: {
        props: {
          multiplier: [10],
        },
        required: ['multiplier'],
      },
    },
    listOption1: {
      Component: ListOption,
      config: {
        props: {
          optionName: ['Label'],
          onPress: [() => {}],
        },
        required: ['optionName', 'onPress'],
      },
    },
    listOption2: {
      Component: ListOption,
      config: {
        props: {
          optionName: ['Label'],
          onPress: [() => {}],
        },
        required: ['optionName', 'onPress'],
      },
    },
  },
  required: ['title', 'spacer', 'listOption1', 'listOption2'],
}

export const Component = ActionSheet

export { default as packageJson } from './package.json'
