export type TTextLevel = symbol & { type: 'TextLevel' }

export const TEXT_LEVEL_PRIMARY_TITLE = Symbol('TEXT_LEVEL_PRIMARY_TITLE') as TTextLevel
export const TEXT_LEVEL_SECONDARY_TITLE = Symbol('TEXT_LEVEL_SECONDARY_TITLE') as TTextLevel
export const TEXT_LEVEL_TERTIARY_TITLE = Symbol('TEXT_LEVEL_TERTIARY_TITLE') as TTextLevel
export const TEXT_LEVEL_BODY = Symbol('TEXT_LEVEL_BODY') as TTextLevel
export const TEXT_LEVEL_LABEL = Symbol('TEXT_LEVEL_LABEL') as TTextLevel
export const TEXT_LEVEL_SMALL_LABEL = Symbol('TEXT_LEVEL_SMALL_LABEL') as TTextLevel
export const TEXT_LEVEL_ERROR_LABEL = Symbol('TEXT_LEVEL_ERROR_LABEL') as TTextLevel
