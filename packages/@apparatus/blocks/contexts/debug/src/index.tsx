import React, { createContext, FC } from 'react'

export type TContextDebug = {
  shouldDebug?: boolean,
}

export type TContextDebugProvider = {
  value: {
    shouldDebug?: boolean,
  },
}

export const ContextDebug = createContext<TContextDebug>({
  shouldDebug: false,
})

export const ContextDebugProvider: FC<TContextDebug> = ({ children, shouldDebug }) => (
  <ContextDebug.Provider value={{ shouldDebug }}>
    {children}
  </ContextDebug.Provider>
)

ContextDebugProvider.displayName = 'ContextDebugProvider'
