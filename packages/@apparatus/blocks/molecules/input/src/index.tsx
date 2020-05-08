import React from 'react'
import {
  component,
  mapDefaultProps,
  startWithType,
  TMapFocused,
} from 'refun'
import { View } from '@primitives/view'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { Text } from '@apparatus/blocks-molecules-text'
import { AtomIcon } from '@apparatus/blocks-atoms-icon'
import { TIconNames } from '@apparatus/blocks-particles-icon-names'
import { AtomInput } from '@apparatus/blocks-atoms-input'
import { TEXT_LEVEL_SMALL_LABEL } from '@apparatus/blocks-particles-text-levels'

export type TInput = {
  value?: string,
  icon?: TIconNames,
  onChange?: (value: string) => void,
  placeholder?: string,
} & TMapFocused

export const Input = component(
  startWithType<TInput>(),
  mapDefaultProps({
    value: '',
    onChange: () => {},
  })
)(({
  icon,
  placeholder,
  onChange,
  onBlur,
  value,
}) => (
  <Horizontal shouldGrow>
    <AtomBackground/>
    <Horizontal vAlign="center">
      <AtomSpacer multiplier={5}/>
      <Vertical hAlign="center">
        <AtomSpacer multiplier={5}/>
        <Horizontal vAlign="center">
          {icon !== undefined && (
            <>
              <AtomIcon name={icon}/>
              <AtomSpacer multiplier={1}/>
            </>
          )}

          <Vertical>
            <AtomSpacer multiplier={1}/>
            <Horizontal>
              <Text level={TEXT_LEVEL_SMALL_LABEL}>
                {placeholder !== undefined && value === '' ? placeholder : ' '}
              </Text>
            </Horizontal>
            <AtomSpacer multiplier={1}/>
          </Vertical>
        </Horizontal>
        <AtomSpacer multiplier={5}/>
      </Vertical>
      <AtomSpacer multiplier={5}/>
    </Horizontal>

    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
      }}
    >
      <AtomInput
        onBlur={onBlur}
        hasIcon={icon !== undefined}
        value={value}
        onChange={onChange}
      />
    </View>
  </Horizontal>
))

Input.displayName = 'Input'
