import { elegir } from 'elegir'
import { TColor } from 'colorido'
import { TThemeableBackground } from '@themeables/background'
import { TAtomBackground } from '@apparatus/blocks-atoms-background'
import {
  INTERFACE_CONTEXT_ACCENT,
  INTERFACE_CONTEXT_MIDTONE,
  TInterfaceContexts,
} from '@apparatus/blocks-particles-interface-contexts'
import {
  COLOR_ACCENT_PRIMARY,
  COLOR_BACKGROUND_PRIMARY,
  COLOR_LIGHT_DETAILS,
  GRID,
} from '@apparatus/blocks-themes-default-tokens'
import { pressed, hovered } from './util/changeColor'

const applyInteractiveState = (color: TColor, isHovered?: boolean, isPressed?: boolean): TColor => (
  elegir(
    isPressed !== undefined && isPressed,
    pressed(color),
    isHovered !== undefined && isHovered,
    hovered(color),
    true,
    color
  )
)

export const themeBackground = ({
  interfaceContext,
  isHovered,
  isPressed,
  multiplier,
  topLeftMultiplier,
  topRightMultiplier,
  bottomLeftMultiplier,
  bottomRightMultiplier,
}: TAtomBackground & { interfaceContext?: TInterfaceContexts }): TThemeableBackground => ({
  color: applyInteractiveState(
    elegir(
      interfaceContext === INTERFACE_CONTEXT_ACCENT,
      COLOR_ACCENT_PRIMARY,
      interfaceContext === INTERFACE_CONTEXT_MIDTONE,
      COLOR_LIGHT_DETAILS,
      true,
      COLOR_BACKGROUND_PRIMARY
    ),
    isHovered,
    isPressed
  ),
  topLeftRadius: elegir(
    topLeftMultiplier !== undefined,
    GRID * (topLeftMultiplier ?? 0),
    multiplier !== undefined,
    GRID * (multiplier ?? 0),
    true,
    0
  ),
  topRightRadius: elegir(
    topRightMultiplier !== undefined,
    GRID * (topRightMultiplier ?? 0),
    multiplier !== undefined,
    GRID * (multiplier ?? 0),
    true,
    0
  ),
  bottomLeftRadius: elegir(
    bottomLeftMultiplier !== undefined,
    GRID * (bottomLeftMultiplier ?? 0),
    multiplier !== undefined,
    GRID * (multiplier ?? 0),
    true,
    0
  ),
  bottomRightRadius: elegir(
    bottomRightMultiplier !== undefined,
    GRID * (bottomRightMultiplier ?? 0),
    multiplier !== undefined,
    GRID * (multiplier ?? 0),
    true,
    0
  ),
})
