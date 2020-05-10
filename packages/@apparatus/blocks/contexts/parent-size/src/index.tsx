import React, { createContext, FC } from 'react'

export type TContextParentSize = {
  parentHeight: number,
  parentWidth: number,
}

export type TContextParentSizeProvider = {
  value: TContextParentSize,
}

export const ContextParentSize = createContext<TContextParentSize>({
  parentHeight: 0,
  parentWidth: 0,
})

export const ContextParentSizeProvider: FC<TContextParentSize> = ({
  children,
  parentHeight,
  parentWidth,
}) => (
  <ContextParentSize.Provider
    value={{
      parentHeight,
      parentWidth,
    }}
  >
    {children}
  </ContextParentSize.Provider>
)

ContextParentSizeProvider.displayName = 'ContextParentSizeProvider'
