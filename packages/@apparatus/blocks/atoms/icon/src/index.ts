import { component, mapContext, startWithType } from 'refun'
import { VectorShape, TVectorShape } from '@primitives/vector-shape'
import { createThemeableVectorShape } from '@apparatus/blocks-contexts-theme'
import { TIconNames } from '@apparatus/blocks-particles-icon-names'
import { ContextInterface } from '@apparatus/blocks-contexts-interface'

export type TAtomIcon = {
  name?: TIconNames,
  isInteractive?: boolean,
}

export const AtomIcon = component(
  startWithType<TAtomIcon>(),
  mapContext(ContextInterface)
)(
  createThemeableVectorShape<TVectorShape>('Icon', VectorShape)
)

AtomIcon.displayName = 'AtomIcon'
