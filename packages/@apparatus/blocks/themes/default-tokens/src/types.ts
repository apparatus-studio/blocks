import { TTokenColors } from './colors'
import { TTokenFontFamilies } from './font-families'
import { TTokenFontSizes } from './font-sizes'
import { TTokenFontWeights } from './font-weights'
import { TTokenFootprints } from './footprints'
import { TTokenGrid } from './grid'
import { TTokenIcons } from './icons'
import { TTokenLineHeights } from './line-heights'

export type TTokens =
  & TTokenColors
  & TTokenFontFamilies
  & TTokenFontSizes
  & TTokenFontWeights
  & TTokenFootprints
  & TTokenGrid
  & TTokenIcons
  & TTokenLineHeights
