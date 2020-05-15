import React, { createContext } from 'react'
import { component, startWithType } from 'refun'
import { setupBackgroundTheme } from '@themeables/background'
import { setupBorderTheme } from '@themeables/border'
import { setupImageTheme } from '@themeables/image'
import { setupTextTheme } from '@themeables/text'
import { setupSpacerTheme } from '@themeables/spacer'
import { setupVectorShapeTheme } from '@themeables/vector-shape'
import * as tokens from '@apparatus/blocks-themes-default-tokens'
import { createTheme } from '@apparatus/blocks-themes-default-mappings'
import { TComponentProps, TTheme } from '@apparatus/blocks-types-theme'

const Theme = createTheme(tokens)

export const { BackgroundTheme, createThemeableBackground } = setupBackgroundTheme<TComponentProps['background']>(Theme.background)
export const { BorderTheme, createThemeableBorder } = setupBorderTheme<TComponentProps['border']>(Theme.border)
export const { ImageTheme, createThemeableImage } = setupImageTheme<TComponentProps['image']>(Theme.image)
export const { TextTheme, createThemeableText } = setupTextTheme<TComponentProps['text']>(Theme.text)
export const { VectorShapeTheme, createThemeableVectorShape } = setupVectorShapeTheme<TComponentProps['vectorShape']>(Theme.vectorShape)
export const { SpacerTheme, createThemeableSpacer } = setupSpacerTheme<TComponentProps['spacer']>(Theme.spacer)

export type TContextTheme = {
  theme: TTheme,
}

export const ContextTheme = createContext<TTheme>({
  background: Theme.background,
  border: Theme.border,
  image: Theme.image,
  text: Theme.text,
  vectorShape: Theme.vectorShape,
  spacer: Theme.spacer,
})

export type TCombinedContextTheme = {
  theme: TTheme,
}

export const CombinedContextTheme = component(
  startWithType<TCombinedContextTheme>()
)(
  ({
    children,
    theme: {
      background,
      border,
      image,
      text,
      spacer,
      vectorShape,
    },
  }) => (
    <BackgroundTheme.Provider value={background}>
      <BorderTheme.Provider value={border}>
        <ImageTheme.Provider value={image}>
          <TextTheme.Provider value={text}>
            <VectorShapeTheme.Provider value={vectorShape}>
              <SpacerTheme.Provider value={spacer}>
                {children}
              </SpacerTheme.Provider>
            </VectorShapeTheme.Provider>
          </TextTheme.Provider>
        </ImageTheme.Provider>
      </BorderTheme.Provider>
    </BackgroundTheme.Provider>
  )
)
