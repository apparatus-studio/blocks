import React, { FC, ReactNode } from 'react'
import { ScrollView } from 'react-native'

export type TScrollHorizontal = {
  children: ReactNode,
  height?: number,
  width?: number,
}

export const ScrollHorizontal: FC<TScrollHorizontal> = ({
  children,
  height,
  width,
}) => (
  <ScrollView
    horizontal
    style={{ height, width }}
    showsHorizontalScrollIndicator={false}
  >
    {children}
  </ScrollView>
)
