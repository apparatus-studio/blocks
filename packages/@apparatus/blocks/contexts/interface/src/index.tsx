import React, { createContext, FC } from 'react'
import { INTERFACE_CONTEXT_REGULAR, TInterfaceContexts } from '@apparatus/blocks-particles-interface-contexts'

export type TContextInterface = {
  interfaceContext: TInterfaceContexts,
}

export type TContextInterfaceProvider = {
  value: {
    interfaceContext: TInterfaceContexts,
  },
}

export const ContextInterface = createContext<TContextInterface>({
  interfaceContext: INTERFACE_CONTEXT_REGULAR,
})

export const ContextInterfaceProvider: FC<TContextInterface> = ({ children, interfaceContext }) => (
  <ContextInterface.Provider value={{ interfaceContext }}>
    {children}
  </ContextInterface.Provider>
)

ContextInterfaceProvider.displayName = 'ContextInterfaceProvider'
