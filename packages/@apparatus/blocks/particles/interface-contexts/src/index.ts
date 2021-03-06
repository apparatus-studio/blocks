export type TInterfaceContexts = symbol & { type: 'InterfaceContexts' }

export const INTERFACE_CONTEXT_REGULAR = Symbol('INTERFACE_CONTEXT_REGULAR') as TInterfaceContexts
export const INTERFACE_CONTEXT_ACCENT = Symbol('INTERFACE_CONTEXT_ACCENT') as TInterfaceContexts
export const INTERFACE_CONTEXT_MIDTONE = Symbol('INTERFACE_CONTEXT_MIDTONE') as TInterfaceContexts
export const INTERFACE_CONTEXT_SUCCESS = Symbol('INTERFACE_CONTEXT_SUCCESS') as TInterfaceContexts
export const INTERFACE_CONTEXT_ERROR = Symbol('INTERFACE_CONTEXT_ERROR') as TInterfaceContexts
