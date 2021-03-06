import { platformSelect } from '@apparatus/blocks-utils-platform'

export const FOOTPRINT_EXTRA_SMALL_START = platformSelect({
  web: 2,
  native: 1,
})

export const FOOTPRINT_EXTRA_SMALL_END = platformSelect({
  web: 2,
  native: 3,
})

export const FOOTPRINT_SMALL_START = platformSelect({
  web: 2,
  native: 0,
})

export const FOOTPRINT_SMALL_END = platformSelect({
  web: 2,
  native: 4,
})

export const FOOTPRINT_MEDIUM_START = platformSelect({
  web: 6,
  native: 7,
})

export const FOOTPRINT_MEDIUM_END = platformSelect({
  web: 6,
  native: 5,
})

export const FOOTPRINT_LARGE_START = platformSelect({
  web: 6,
  native: 6,
})

export const FOOTPRINT_LARGE_END = platformSelect({
  web: 6,
  native: 6,
})

export const FOOTPRINT_EXTRA_LARGE_START = platformSelect({
  web: 8,
  native: 6,
})

export const FOOTPRINT_EXTRA_LARGE_END = platformSelect({
  web: 6,
  native: 8,
})

export type TTokenFootprints = {
  FOOTPRINT_EXTRA_SMALL_START?: number,
  FOOTPRINT_EXTRA_SMALL_END?: number,
  FOOTPRINT_SMALL_START?: number,
  FOOTPRINT_SMALL_END?: number,
  FOOTPRINT_MEDIUM_START?: number,
  FOOTPRINT_MEDIUM_END?: number,
  FOOTPRINT_LARGE_START?: number,
  FOOTPRINT_LARGE_END?: number,
  FOOTPRINT_EXTRA_LARGE_START?: number,
  FOOTPRINT_EXTRA_LARGE_END?: number,
}
