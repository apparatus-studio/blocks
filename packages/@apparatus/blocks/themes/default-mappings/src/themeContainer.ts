import { TThemeableSpacer } from '@themeables/spacer'
import { TAtomContainer } from '@apparatus/blocks-atoms-container'
import { TTokens } from '@apparatus/blocks-themes-default-tokens'
import { elegir } from 'elegir'

export const themeContainer = ({
  GRID,
}: TTokens) => ({
  multiplier,
  multiplierBottom,
  multiplierLeft,
  multiplierRight,
  multiplierTop,
}: TAtomContainer): TThemeableSpacer => ({
  blockStart: elegir(
    multiplier !== undefined,
    GRID * (multiplier ?? 0),
    multiplierTop !== undefined,
    GRID * (multiplierTop ?? 0),
    true,
    0
  ),
  inlineStart: elegir(
    multiplier !== undefined,
    GRID * (multiplier ?? 0),
    multiplierLeft !== undefined,
    GRID * (multiplierLeft ?? 0),
    true,
    0
  ),
  blockEnd: elegir(
    multiplier !== undefined,
    GRID * (multiplier ?? 0),
    multiplierBottom !== undefined,
    GRID * (multiplierBottom ?? 0),
    true,
    0
  ),
  inlineEnd: elegir(
    multiplier !== undefined,
    GRID * (multiplier ?? 0),
    multiplierRight !== undefined,
    GRID * (multiplierRight ?? 0),
    true,
    0
  ),
})
