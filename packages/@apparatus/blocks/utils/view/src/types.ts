import { ReactNode } from 'react'
import { TColor } from 'colorido'
import { TTransformValue } from 'stili'

export type TView = {
  background?: TColor,
  bottom?: number,
  children?: ReactNode,
  height?: number | string,
  isAbsolute?: boolean,
  left?: number,
  maxHeight?: number | string,
  maxWidth?: number | string,
  right?: number,
  top?: number,
  transform?: TTransformValue,
  width?: number | string,
  style?: any,
}
