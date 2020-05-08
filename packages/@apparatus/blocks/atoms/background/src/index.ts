import { component, mapContext, startWithType } from 'refun'
import { createThemeableBackground } from '@apparatus/blocks-contexts-theme'
import { ContextInterface } from '@apparatus/blocks-contexts-interface'
import { AnimatedBackground, TAnimatedBackground } from '@apparatus/blocks-utils-animated-background'

export type TAtomBackground = {
  isHovered?: boolean,
  isPressed?: boolean,
  multiplier?: 0 | 3 | 6 | 12,
  topLeftMultiplier?: 0 | 3 | 6 | 12,
  topRightMultiplier?: 0 | 3 | 6 | 12,
  bottomLeftMultiplier?: 0 | 3 | 6 | 12,
  bottomRightMultiplier?: 0 | 3 | 6 | 12,
}

export const AtomBackground = component(
  startWithType<TAtomBackground>(),
  mapContext(ContextInterface)
)(
  createThemeableBackground<TAnimatedBackground>(
    'Background',
    AnimatedBackground
  )
)

AtomBackground.displayName = 'AtomBackground'
