import React from 'react'
import {
  component,
  mapDefaultProps,
  mapHandlers,
  mapState,
  startWithType,
} from 'refun'
import { isValidDate } from '@apparatus/blocks-data-validation'
import { Input } from '@apparatus/blocks-molecules-input'
import { ICON_NAMES_CALENDAR } from '@apparatus/blocks-particles-icon-names'

export type TDateInput = {
  value?: string,
  onChange?: (value: string) => void,
  placeholder?: string,
}

export const DateInput = component(
  startWithType<TDateInput>(),
  mapDefaultProps({
    value: '',
    onChange: () => {},
  }),
  mapState('internalValue', 'setValue', ({ value }) => value, ['value']),
  mapHandlers({
    onBlur: ({ onChange, internalValue, setValue, value }) => () => {
      if (isValidDate(internalValue)) {
        onChange(internalValue)
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
    onBlur={onBlur}
    onChange={setValue}
    placeholder={placeholder}
    value={internalValue}
    icon={ICON_NAMES_CALENDAR}
  />
))

DateInput.displayName = 'DateInput'

