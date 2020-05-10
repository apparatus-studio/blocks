import React, { ReactNode } from 'react'
import { elegir } from 'elegir'
import { component, startWithType } from 'refun'
import { ButtonIcon } from '@apparatus/blocks-molecules-button-icon'
import {
  ICON_NAMES_NAVIGATION,
  ICON_NAMES_ARROW_LEFT,
  ICON_NAMES_CLOSE,
} from '@apparatus/blocks-particles-icon-names'
import { Text } from '@apparatus/blocks-molecules-text'
import { TEXT_LEVEL_BODY } from '@apparatus/blocks-particles-text-levels'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'

export type TContextHeader = {
  onBack?: () => void,
  onMore?: () => void,
  onClose?: () => void,
  children: ReactNode,
}

export const ContextHeader = component(
  startWithType<TContextHeader>()
)(({ children, onBack, onClose, onMore }) => (
  <Vertical>
    <Horizontal shouldGrow>
      <ButtonIcon
        name={onBack !== undefined ? ICON_NAMES_ARROW_LEFT : undefined}
        onPress={onBack}
      />
      <Horizontal hAlign="center" shouldGrow>
        <Vertical hAlign="center">
          <AtomSpacer multiplier={1}/>
          <Text level={TEXT_LEVEL_BODY}>
            {children}
          </Text>
          <AtomSpacer multiplier={1}/>
        </Vertical>
      </Horizontal>
      <ButtonIcon
        name={elegir(
          onClose !== undefined,
          ICON_NAMES_CLOSE,
          onMore !== undefined,
          ICON_NAMES_NAVIGATION,
          true,
          undefined
        )}
        onPress={onMore || onClose}
      />
    </Horizontal>
    <Horizontal hAlign="center">
      <AtomSpacer multiplier={10}/>
    </Horizontal>
  </Vertical>
))

ContextHeader.displayName = 'ContextHeader'
