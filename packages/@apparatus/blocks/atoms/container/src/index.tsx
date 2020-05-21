import React, { ReactNode } from 'react'
import { component, startWithType, mapContext } from 'refun'
import { View } from '@primitives/view'
import { TThemeableSpacer } from '@themeables/spacer'
import { createThemeableSpacer } from '@apparatus/blocks-contexts-theme'
import { ContextDebug } from '@apparatus/blocks-contexts-debug'
import { ContextInterface } from '@apparatus/blocks-contexts-interface'
import { ContextParentSize } from '@apparatus/blocks-contexts-parent-size'
import { Vertical } from '@apparatus/blocks-utils-vertical'
import { Horizontal } from '@apparatus/blocks-utils-horizontal'
import { ScrollVertical } from '@apparatus/blocks-utils-scroll-vertical'
import { platformSelect } from '@apparatus/blocks-utils-platform'

export type TAtomContainer = {
  children: ReactNode,
  multiplier?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  multiplierTop?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  multiplierLeft?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  multiplierRight?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  multiplierBottom?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  shouldExpandVertically?: boolean,
  shouldScroll?: boolean,
  shouldPadIOS?: boolean,
}

export const Spacer = component(
  startWithType<TThemeableSpacer>(),
  mapContext(ContextDebug)
)(({ blockStart, inlineStart, shouldDebug }) => (
  <View
    style={{
      display: 'flex',
      width: inlineStart !== undefined ? inlineStart : 1,
      height: blockStart !== undefined ? blockStart : 1,
      ...shouldDebug
        ? { backgroundColor: 'rgba(255, 0, 0, 0.5)' }
        : {},
    }}
  />
))

type TContainer = TThemeableSpacer
& {
  children: ReactNode,
  shouldPadIOS?: boolean,
  shouldExpandVertically?: boolean,
  shouldScroll?: boolean,
}

export const Container = component(
  startWithType<TContainer>(),
  mapContext(ContextParentSize)
)(({
  blockStart,
  blockEnd,
  children,
  inlineStart,
  inlineEnd,
  parentHeight,
  parentWidth,
  shouldExpandVertically,
  shouldPadIOS,
  shouldScroll,
}) => (
  <Vertical
    height={shouldExpandVertically !== undefined && shouldExpandVertically ? parentHeight : undefined}
    width={parentWidth}
  >
    {
      shouldScroll !== undefined && shouldScroll
        ? (
          <ScrollVertical
            height={
              (shouldExpandVertically !== undefined && shouldExpandVertically)
                ? parentHeight
                : undefined
            }
            width={parentWidth}
          >
            {(shouldPadIOS !== undefined && shouldPadIOS) && platformSelect({
              web: null,
              android: null,
              ios: (
                <Spacer
                  blockStart={44}
                  inlineStart={44}
                />
              ),
            })}
            <Spacer
              blockStart={blockStart}
              inlineStart={blockStart}
            />
            <Horizontal
              width={parentWidth}
              vAlign="center"
            >
              <Spacer
                blockStart={inlineStart}
                inlineStart={inlineStart}
              />
              <Vertical
                width={parentWidth - ((inlineStart ?? 0) * 2)}
              >
                {children}
              </Vertical>
              <Spacer
                blockStart={inlineEnd}
                inlineStart={inlineEnd}
              />
            </Horizontal>
            <Spacer
              blockStart={blockEnd}
              inlineStart={blockEnd}
            />
          </ScrollVertical>
        )
        : (
          <>
            {(shouldPadIOS !== undefined && shouldPadIOS) && platformSelect({
              web: null,
              android: null,
              ios: (
                <Spacer
                  blockStart={44}
                  inlineStart={44}
                />
              ),
            })}
            <Spacer
              blockStart={blockStart}
              inlineStart={blockStart}
            />
            <Horizontal
              width={parentWidth}
              vAlign="center"
            >
              <Spacer
                blockStart={inlineStart}
                inlineStart={inlineStart}
              />
              <Vertical
                width={parentWidth - ((inlineStart ?? 0) * 2)}
              >
                {children}
              </Vertical>
              <Spacer
                blockStart={inlineEnd}
                inlineStart={inlineEnd}
              />
            </Horizontal>
            <Spacer
              blockStart={blockEnd}
              inlineStart={blockEnd}
            />
          </>
        )
    }
  </Vertical>
))

export const AtomContainer = component(
  startWithType<TAtomContainer>(),
  mapContext(ContextInterface)
)(
  createThemeableSpacer<TContainer>('Container', Container)
)
