import { elegir } from 'elegir'
import { TThemeableText } from '@themeables/text'
import { TAtomText } from '@apparatus/blocks-atoms-text'
import {
  TEXT_LEVEL_PRIMARY_TITLE,
  TEXT_LEVEL_SECONDARY_TITLE,
  TEXT_LEVEL_TERTIARY_TITLE,
  TEXT_LEVEL_BODY,
  TEXT_LEVEL_LABEL,
  TEXT_LEVEL_ERROR_LABEL,
  TEXT_LEVEL_SMALL_LABEL,
} from '@apparatus/blocks-particles-text-levels'
import {
  INTERFACE_CONTEXT_ACCENT,
  INTERFACE_CONTEXT_ERROR,
  INTERFACE_CONTEXT_SUCCESS,
  TInterfaceContexts,
} from '@apparatus/blocks-particles-interface-contexts'
import {
  COLOR_BACKGROUND_PRIMARY,
  COLOR_LIGHT_DETAILS,
  COLOR_ACCENT_PRIMARY,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_EXTRA_SMALL,
  FONT_SIZE_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_LARGE,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_REGULAR,
  LINE_HEIGHT_LABEL,
  LINE_HEIGHT_BODY,
  LINE_HEIGHT_PRIMARY_TITLE,
  LINE_HEIGHT_SECONDARY_TITLE,
  LINE_HEIGHT_TERTIARY_TITLE,
  LINE_HEIGHT_SMALL_LABEL,
  LINE_HEIGHT_ERROR_LABEL,
} from '@apparatus/blocks-themes-default-tokens'

export const themeText = ({
  level,
  isInteractive,
  isBold,
  interfaceContext,
}: TAtomText & { interfaceContext?: TInterfaceContexts }): TThemeableText => ({
  color: elegir(
    interfaceContext === INTERFACE_CONTEXT_ACCENT,
    COLOR_BACKGROUND_PRIMARY,
    interfaceContext === INTERFACE_CONTEXT_SUCCESS,
    COLOR_BACKGROUND_PRIMARY,
    interfaceContext === INTERFACE_CONTEXT_ERROR,
    COLOR_BACKGROUND_PRIMARY,
    isInteractive !== undefined && isInteractive,
    COLOR_ACCENT_PRIMARY,
    true,
    COLOR_ACCENT_PRIMARY
  ),
  fontFamily: elegir(
    level === TEXT_LEVEL_PRIMARY_TITLE,
    FONT_FAMILY_BOLD,
    level === TEXT_LEVEL_SECONDARY_TITLE,
    FONT_FAMILY_BOLD,
    level === TEXT_LEVEL_TERTIARY_TITLE,
    FONT_FAMILY_BOLD,
    isBold !== undefined && isBold,
    FONT_FAMILY_BOLD,
    true,
    FONT_FAMILY_REGULAR
  ),
  fontWeight: elegir(
    level === TEXT_LEVEL_PRIMARY_TITLE,
    FONT_WEIGHT_BOLD,
    level === TEXT_LEVEL_SECONDARY_TITLE,
    FONT_WEIGHT_BOLD,
    level === TEXT_LEVEL_TERTIARY_TITLE,
    FONT_WEIGHT_BOLD,
    isBold !== undefined && isBold,
    FONT_WEIGHT_BOLD,
    true,
    FONT_WEIGHT_REGULAR
  ),
  fontSize: elegir(
    level === TEXT_LEVEL_PRIMARY_TITLE,
    FONT_SIZE_EXTRA_LARGE,
    level === TEXT_LEVEL_SECONDARY_TITLE,
    FONT_SIZE_LARGE,
    level === TEXT_LEVEL_TERTIARY_TITLE,
    FONT_SIZE_MEDIUM,
    level === TEXT_LEVEL_BODY,
    FONT_SIZE_MEDIUM,
    level === TEXT_LEVEL_LABEL,
    FONT_SIZE_MEDIUM,
    level === TEXT_LEVEL_ERROR_LABEL,
    FONT_SIZE_SMALL,
    level === TEXT_LEVEL_SMALL_LABEL,
    FONT_SIZE_EXTRA_SMALL
  ),
  lineHeight: elegir(
    level === TEXT_LEVEL_PRIMARY_TITLE,
    LINE_HEIGHT_PRIMARY_TITLE,
    level === TEXT_LEVEL_SECONDARY_TITLE,
    LINE_HEIGHT_SECONDARY_TITLE,
    level === TEXT_LEVEL_TERTIARY_TITLE,
    LINE_HEIGHT_TERTIARY_TITLE,
    level === TEXT_LEVEL_LABEL,
    LINE_HEIGHT_LABEL,
    level === TEXT_LEVEL_ERROR_LABEL,
    LINE_HEIGHT_ERROR_LABEL,
    level === TEXT_LEVEL_BODY,
    LINE_HEIGHT_BODY,
    level === TEXT_LEVEL_SMALL_LABEL,
    LINE_HEIGHT_SMALL_LABEL
  ),
})
