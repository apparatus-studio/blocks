import React, { FC, ReactNode } from 'react'

export type TScrollVertical = {
  children: ReactNode,
  height: number,
  width: number,
}

export const ScrollVertical: FC<TScrollVertical> = ({
  children,
  height,
  width,
}) => (
  <div
    style={{
      overflowY: 'scroll',
      height,
      width,
    }}
  >
    {children}
  </div>
)
