import rgbToLab from '@fantasy-color/rgb-to-lab'
import labToRgb from '@fantasy-color/lab-to-rgb'
import { TLab, TRgb } from '@fantasy-color/types'
import { TColor } from 'colorido'
import { mapColorSpace } from '@fantasy-color/map-color-space-polynomial'
import { darker, lighter } from './hoverables'

const darkerTransformation = mapColorSpace(darker, 2)
const lighterTransformation = mapColorSpace(lighter, 2)

const toTuple = ({ luminance, a, b }: TLab): [number, number, number] => [luminance, a, b]

const tupleToRgb = ([red, green, blue]: [number, number, number]) => ({ red, green, blue })
const tupleToLab = ([luminance, a, b]: [number, number, number]) => ({ luminance, a, b })
const rgbToTuple = ({ red, green, blue }: TRgb): [number, number, number, number] => [red, green, blue, 1]

export const hovered = ([red, green, blue]: TColor) => {
  const lab = toTuple(
    rgbToLab(
      tupleToRgb([red, green, blue])
    )
  )

  return rgbToTuple(
    labToRgb(
      tupleToLab(
        lab[0] > 30
          ? darkerTransformation(lab)
          : lighterTransformation(lab)
      )
    )
  )
}

export const pressed = ([red, green, blue]: TColor) => {
  const lab = toTuple(
    rgbToLab(
      tupleToRgb([red, green, blue])
    )
  )

  const sourceInLab = rgbToLab(tupleToRgb([red, green, blue]))
  const targetInLab = tupleToLab(
    lab[0] > 30
      ? darkerTransformation(lab)
      : lighterTransformation(lab)
  )

  const middleInLab = ({
    luminance: targetInLab.luminance + (sourceInLab.luminance - targetInLab.luminance) / 2,
    a: targetInLab.a + (sourceInLab.a - targetInLab.a) / 2,
    b: targetInLab.b + (sourceInLab.b - targetInLab.b) / 2,
  })

  return rgbToTuple(labToRgb(middleInLab))
}
