import React, { FC, ReactNode } from 'react'
import { ScrollView } from 'react-native'

export type TScrollVertical = {
  children: ReactNode,
  height: number,
  width: number,
}

export const ScrollVertical: FC<TScrollVertical> = ({ children }) => (
  <ScrollView>{children}</ScrollView>
)
