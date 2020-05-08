import React, { FC } from 'react'
import { TOmitKey } from 'tsfn'
import { TColor } from 'colorido'
import { component, mapWithProps, startWithType } from 'refun'
import { TAnimation, Animation, easeInOutCubic } from '@primitives/animation'
import { Background } from '@primitives/background'

export type TAnimatedColor<T> = TOmitKey<TAnimation<T>, 'easing' | 'time'>

export const AnimatedColor = component(
  startWithType<TAnimatedColor<TColor>>(),
  mapWithProps(({ children }) => ({
    children: (values: TColor) => children([
      Math.round(values[0]),
      Math.round(values[1]),
      Math.round(values[2]),
      values[3],
    ]),
  }))
)(({ children, values }) => (
  <Animation easing={easeInOutCubic} time={150} values={values}>{children}</Animation>
))

AnimatedColor.displayName = 'AnimatedColor'

export type TAnimatedBackground = {
  color: TColor,
  topLeftRadius?: number,
  topRightRadius?: number,
  bottomRightRadius?: number,
  bottomLeftRadius?: number,
}

export const AnimatedBackground: FC<TAnimatedBackground> = ({
  topLeftRadius,
  topRightRadius,
  bottomLeftRadius,
  bottomRightRadius,
  color,
}) => (
  <AnimatedColor values={color}>
    {(color: TColor) => (
      <Background
        color={color}
        topLeftRadius={topLeftRadius}
        topRightRadius={topRightRadius}
        bottomLeftRadius={bottomLeftRadius}
        bottomRightRadius={bottomRightRadius}
      />
    )}
  </AnimatedColor>
)

AnimatedBackground.displayName = 'AnimatedBackground'
