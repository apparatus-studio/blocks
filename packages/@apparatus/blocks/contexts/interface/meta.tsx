import React, { FC } from 'react'
import { TComponentConfig } from 'autoprops'
import {
  INTERFACE_CONTEXT_ACCENT,
  INTERFACE_CONTEXT_REGULAR,
} from '@apparatus/blocks-particles-interface-contexts'
import { View } from '@primitives/view'
import { Text } from '@apparatus/blocks-molecules-text'
import { TEXT_LEVEL_PRIMARY_TITLE, TEXT_LEVEL_BODY } from '@apparatus/blocks-particles-text-levels'
import { Button } from '@apparatus/blocks-molecules-button'
import { BUTTON_LEVEL_PRIMARY, BUTTON_LEVEL_SECONDARY } from '@apparatus/blocks-particles-button-levels'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import { Card } from '@apparatus/blocks-molecules-card'
import { ContextInterfaceProvider, TContextInterface } from './src'

export const config: TComponentConfig<TContextInterface, 'background' | 'view'> = {
  props: {
    interfaceContext: [
      INTERFACE_CONTEXT_REGULAR,
      INTERFACE_CONTEXT_ACCENT,
    ],
  },
  children: {
    background: {
      Component: AtomBackground,
      config: { props: {} },
    },
    view: {
      Component: View,
      config: {
        props: { style: [{ zIndex: 1 }] },
        children: {
          title: {
            Component: Text,
            config: {
              props: {
                level: [TEXT_LEVEL_PRIMARY_TITLE],
                children: ['Testing'],
              },
              required: ['level', 'children'],
            },
          },
          paragraph: {
            Component: Text,
            config: {
              props: {
                level: [TEXT_LEVEL_BODY],
                children: ['Our apps are ad-free and rely on your support. By pledging on Patreon you’ll ensure future development. Our pledges start at $2.'],
              },
              required: ['level', 'children'],
            },
          },
          card: {
            Component: Card,
            config: {
              props: {
                name: ['Spotify'],
                howMany: ['5 hs'],
                howMuch: ['1500 lr'],
                period: ['today'],
              },
              required: ['name', 'howMany', 'howMuch', 'period'],
            },
          },
          buttonPrimary: {
            Component: Button,
            config: {
              props: {
                level: [BUTTON_LEVEL_PRIMARY],
                children: ['Primary'],
              },
              required: ['level', 'children'],
            },
          },
          buttonSecondary: {
            Component: Button,
            config: {
              props: {
                level: [BUTTON_LEVEL_SECONDARY],
                children: ['Secondary'],
              },
              required: ['level', 'children'],
            },
          },
        },
        required: [
          'style',
          'title',
          'paragraph',
          'card',
          'buttonPrimary',
          'buttonSecondary',
        ],
      },
    },
  },
  required: [
    'background',
    'interfaceContext',
    'view',
  ],
}

export const Component: FC<TContextInterface> = (props) => (
  <Vertical>
    <ContextInterfaceProvider {...props}/>
  </Vertical>
)

Component.displayName = 'ContextInterface'

export { default as packageJson } from './package.json'
