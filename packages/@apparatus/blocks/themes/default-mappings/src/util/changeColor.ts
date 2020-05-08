import rgbToLab from '@fantasy-color/rgb-to-lab'
import labToRgb from '@fantasy-color/lab-to-rgb'
import { TLab, TRgb } from '@fantasy-color/types'
import { TColor } from 'colorido'
import { mapColorSpace } from '@fantasy-color/map-color-space-polynomial'
import hoverableCoefficients from './hoverables'

const transformation = mapColorSpace(hoverableCoefficients, 2)

const toTuple = ({ luminance, a, b }: TLab): [number, number, number] => [luminance, a, b]

const tupleToRgb = ([red, green, blue]: [number, number, number]) => ({ red, green, blue })
const tupleToLab = ([luminance, a, b]: [number, number, number]) => ({ luminance, a, b })
const rgbToTuple = ({ red, green, blue }: TRgb): [number, number, number, number] => [red, green, blue, 1]

export const hovered = ([red, green, blue]: TColor) => rgbToTuple(
  labToRgb(
    tupleToLab(
      transformation(
        toTuple(
          rgbToLab(
            tupleToRgb([red, green, blue])
          )
        )
      )
    )
  )
)

export const pressed = ([red, green, blue]: TColor) => {
  const sourceInLab = rgbToLab(tupleToRgb([red, green, blue]))
  const targetInLab = tupleToLab(transformation(toTuple(sourceInLab)))

  const middleInLab = ({
    luminance: targetInLab.luminance + (sourceInLab.luminance - targetInLab.luminance) / 2,
    a: targetInLab.a + (sourceInLab.a - targetInLab.a) / 2,
    b: targetInLab.b + (sourceInLab.b - targetInLab.b) / 2,
  })

  return rgbToTuple(labToRgb(middleInLab))
}
