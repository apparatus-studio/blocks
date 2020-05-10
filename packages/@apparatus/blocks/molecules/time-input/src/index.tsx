import React from 'react'
import {
  component,
  mapDefaultProps,
  mapHandlers,
  mapState,
  startWithType,
} from 'refun'
import { ICON_NAMES_WATCH } from '@apparatus/blocks-particles-icon-names'
import { transformTime } from '@apparatus/blocks-data-transform-input'
import { isValidTime } from '@apparatus/blocks-data-validation'
import { Input } from '@apparatus/blocks-molecules-input'

export type TTimeInput = {
  onChange?: (value: string) => void,
  placeholder?: string,
  value?: string,
}

export const TimeInput = component(
  startWithType<TTimeInput>(),
  mapDefaultProps({
    value: '',
    onChange: () => {},
  }),
  mapState('internalValue', 'setValue', ({ value }) => value, ['value']),
  mapHandlers({
    onBlur: ({ onChange, internalValue, setValue, value }) => () => {
      const cleanTime = transformTime(internalValue)

      if (isValidTime(cleanTime)) {
        onChange(cleanTime)
        setValue(cleanTime)
      } else {
        setValue(value)
      }
    },
  })
)(({
  internalValue,
  placeholder,
  setValue,
  onBlur,
}) => (
  <Input
    icon={ICON_NAMES_WATCH}
    onBlur={onBlur}
    onChange={setValue}
    placeholder={placeholder}
    value={internalValue}
  />
))

TimeInput.displayName = 'TimeInput'

