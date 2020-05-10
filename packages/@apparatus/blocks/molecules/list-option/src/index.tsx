import React from 'react'
import { component, startWithType, mapHandlers } from 'refun'
import { Button } from '@primitives/button'
import { ICON_NAMES_ARROW_RIGHT } from '@apparatus/blocks-particles-icon-names'
import { Text } from '@apparatus/blocks-molecules-text'
import { TEXT_LEVEL_BODY } from '@apparatus/blocks-particles-text-levels'
import { AtomIcon } from '@apparatus/blocks-atoms-icon'
import { AtomBorder } from '@apparatus/blocks-atoms-border'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'

export type TListOption = {
  optionName: string,
  onPress: (code?: string) => void,
  isFirst?: boolean,
  value?: string,
  code?: string,
}

export const ListOption = component(
  startWithType<TListOption>(),
  mapHandlers({
    onPress: ({ onPress, code }) => () => {
      onPress(code)
    },
  })
)(({ isFirst, onPress, optionName, value }) => (
  <Button onPress={onPress}>
    <Horizontal vAlign="center" shouldGrow>
      <AtomBorder hasTop={!isFirst} multiplier={0} size={1}/>
      <Vertical hAlign="center" shouldGrow>
        <AtomSpacer multiplier={5}/>
        <Horizontal width="100%">
          <Vertical hAlign="start" shouldGrow>
            <Vertical hAlign="center">
              <AtomSpacer multiplier={1}/>
              <Text level={TEXT_LEVEL_BODY}>
                {optionName}
              </Text>
              <AtomSpacer multiplier={1}/>
            </Vertical>
          </Vertical>

          <Horizontal hAlign="end">
            {value !== undefined && (
              <Vertical hAlign="center">
                <AtomSpacer multiplier={1}/>
                <Text level={TEXT_LEVEL_BODY} isInteractive>
                  {value}
                </Text>
                <AtomSpacer multiplier={1}/>
              </Vertical>
            )}
            <AtomIcon isInteractive name={ICON_NAMES_ARROW_RIGHT}/>
          </Horizontal>
        </Horizontal>
        <AtomSpacer multiplier={5}/>
      </Vertical>
    </Horizontal>
  </Button>
))

ListOption.displayName = 'ListOption'
