import React from 'react'
import {
  component,
  mapDefaultProps,
  startWithType,
  TMapFocused,
  mapFocused,
} from 'refun'
import { View } from '@primitives/view'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { AtomBackground } from '@apparatus/blocks-atoms-background'
import { AtomBorder } from '@apparatus/blocks-atoms-border'
import { AtomSpacer } from '@apparatus/blocks-atoms-spacer'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { Text } from '@apparatus/blocks-molecules-text'
import { AtomIcon } from '@apparatus/blocks-atoms-icon'
import { TIconNames } from '@apparatus/blocks-particles-icon-names'
import { AtomInput } from '@apparatus/blocks-atoms-input'
import { TEXT_LEVEL_BODY } from '@apparatus/blocks-particles-text-levels'

export type TInput = {
  value?: string,
  icon?: TIconNames,
  onChange?: (value: string) => void,
  placeholder?: string,
  shouldUseNumberKeyboard?: boolean,
} & TMapFocused

export const Input = component(
  startWithType<TInput>(),
  mapFocused,
  mapDefaultProps({
    value: '',
    onChange: () => {},
  })
)(({
  icon,
  isFocused,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  shouldUseNumberKeyboard,
  value,
}) => (
  <Horizontal shouldGrow>
    <AtomBackground
      multiplier={3}
    />
    <AtomBorder
      hasBottom
      hasLeft
      hasRight
      hasTop
      isFocused={isFocused}
      multiplier={3}
      size={2}
    />
    <Horizontal vAlign="center">
      <AtomSpacer multiplier={5}/>
      <Vertical hAlign="center">
        <AtomSpacer multiplier={4}/>
        <Horizontal vAlign="center">
          {icon !== undefined && (
            <>
              <AtomIcon name={icon}/>
              <AtomSpacer multiplier={2}/>
            </>
          )}

          <Vertical>
            <AtomSpacer multiplier={1}/>
            <Horizontal>
              <Text level={TEXT_LEVEL_BODY}>
                {placeholder !== undefined && value === '' ? placeholder : ' '}
              </Text>
            </Horizontal>
            <AtomSpacer multiplier={1}/>
          </Vertical>
        </Horizontal>
        <AtomSpacer multiplier={4}/>
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
        onFocus={onFocus}
        hasIcon={icon !== undefined}
        value={value}
        onChange={onChange}
        shouldUseNumberKeyboard={shouldUseNumberKeyboard}
      />
    </View>
  </Horizontal>
))

Input.displayName = 'Input'
