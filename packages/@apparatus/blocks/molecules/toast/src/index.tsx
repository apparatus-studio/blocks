import React, { ReactNode } from 'react'
import { component, startWithType } from 'refun'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import { TFeedbackState, FEEDBACK_STATE_SUCCESS } from '@apparatus/blocks-particles-feedback-states'
import { Text } from '@apparatus/blocks-molecules-text'
import { AtomIcon } from '@apparatus/blocks-atoms-icon'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { ContextInterfaceProvider } from '@apparatus/blocks-contexts-interface'
import { INTERFACE_CONTEXT_SUCCESS, INTERFACE_CONTEXT_ERROR } from '@apparatus/blocks-particles-interface-contexts'
import { TEXT_LEVEL_BODY } from '@apparatus/blocks-particles-text-levels'
import { ICON_NAMES_CHECK, ICON_NAMES_WARNING } from '@apparatus/blocks-particles-icon-names'

export type TToast = {
  feedbackState: TFeedbackState,
  children: ReactNode,
}

export const Toast = component(
  startWithType<TToast>()
)(({ feedbackState, children }) => (
  <ContextInterfaceProvider
    interfaceContext={
      feedbackState === FEEDBACK_STATE_SUCCESS
        ? INTERFACE_CONTEXT_SUCCESS
        : INTERFACE_CONTEXT_ERROR
    }
  >
    <Horizontal vAlign="center" width="100%">
      <AtomBackground multiplier={3}/>
      <Horizontal vAlign="center">
        <AtomSpacer multiplier={4}/>
        <Vertical hAlign="center">
          <AtomSpacer multiplier={4}/>
          <Horizontal vAlign="center">
            <AtomIcon
              name={
                feedbackState === FEEDBACK_STATE_SUCCESS
                  ? ICON_NAMES_CHECK
                  : ICON_NAMES_WARNING
              }
            />

            <AtomSpacer multiplier={1}/>

            <Vertical hAlign="center">
              <AtomSpacer multiplier={1}/>
              <Text level={TEXT_LEVEL_BODY}>
                {children}
              </Text>
              <AtomSpacer multiplier={1}/>
            </Vertical>
          </Horizontal>
          <AtomSpacer multiplier={4}/>
        </Vertical>
      </Horizontal>
    </Horizontal>
  </ContextInterfaceProvider>
))

Toast.displayName = 'Toast'
