import React, { FC, ReactNode } from 'react'

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
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      height,
      overflowX: 'scroll',
      width,
    }}
  >
    {children}
  </div>
)
