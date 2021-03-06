import { elegir } from 'elegir'
import { TThemeableSpacer } from '@themeables/spacer'
import { TAtomFootprint } from '@apparatus/blocks-atoms-footprint'
import {
  TEXT_LEVEL_PRIMARY_TITLE,
  TEXT_LEVEL_SECONDARY_TITLE,
  TEXT_LEVEL_TERTIARY_TITLE,
  TEXT_LEVEL_LABEL,
  TEXT_LEVEL_ERROR_LABEL,
  TEXT_LEVEL_SMALL_LABEL,
  TEXT_LEVEL_BODY,
} from '@apparatus/blocks-particles-text-levels'
import { TTokens } from '@apparatus/blocks-themes-default-tokens'

export const themeFootprint = ({
  FOOTPRINT_EXTRA_LARGE_START,
  FOOTPRINT_LARGE_START,
  FOOTPRINT_MEDIUM_START,
  FOOTPRINT_SMALL_START,
  FOOTPRINT_EXTRA_LARGE_END,
  FOOTPRINT_LARGE_END,
  FOOTPRINT_MEDIUM_END,
  FOOTPRINT_SMALL_END,
  FOOTPRINT_EXTRA_SMALL_END,
  FOOTPRINT_EXTRA_SMALL_START,
}: TTokens) => ({ level }: TAtomFootprint): TThemeableSpacer => ({
  blockStart: elegir(
    level === TEXT_LEVEL_PRIMARY_TITLE,
    FOOTPRINT_EXTRA_LARGE_START,
    level === TEXT_LEVEL_SECONDARY_TITLE,
    FOOTPRINT_LARGE_START,
    level === TEXT_LEVEL_TERTIARY_TITLE,
    FOOTPRINT_MEDIUM_START,
    level === TEXT_LEVEL_BODY,
    FOOTPRINT_MEDIUM_START,
    level === TEXT_LEVEL_LABEL,
    FOOTPRINT_MEDIUM_START,
    level === TEXT_LEVEL_ERROR_LABEL,
    FOOTPRINT_SMALL_START,
    level === TEXT_LEVEL_SMALL_LABEL,
    FOOTPRINT_EXTRA_SMALL_START
  ),
  blockEnd: elegir(
    level === TEXT_LEVEL_PRIMARY_TITLE,
    FOOTPRINT_EXTRA_LARGE_END,
    level === TEXT_LEVEL_SECONDARY_TITLE,
    FOOTPRINT_LARGE_END,
    level === TEXT_LEVEL_TERTIARY_TITLE,
    FOOTPRINT_MEDIUM_END,
    level === TEXT_LEVEL_BODY,
    FOOTPRINT_MEDIUM_END,
    level === TEXT_LEVEL_LABEL,
    FOOTPRINT_MEDIUM_END,
    level === TEXT_LEVEL_ERROR_LABEL,
    FOOTPRINT_SMALL_END,
    level === TEXT_LEVEL_SMALL_LABEL,
    FOOTPRINT_EXTRA_SMALL_END
  ),
})
