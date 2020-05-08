import { TComponents } from '@sandbox/ui'
/* eslint-disable import/no-extraneous-dependencies */
import * as AtomBackground from '@apparatus/blocks-atoms-background/meta'
import * as AtomBorder from '@apparatus/blocks-atoms-border/meta'
import * as AtomFootprint from '@apparatus/blocks-atoms-footprint/meta'
import * as AtomIcon from '@apparatus/blocks-atoms-icon/meta'
import * as AtomInput from '@apparatus/blocks-atoms-input/meta'
import * as AtomSpacer from '@apparatus/blocks-atoms-spacer/meta'
import * as AtomText from '@apparatus/blocks-atoms-text/meta'
import * as ContextInterface from '@apparatus/blocks-contexts-interface/meta'
import * as Button from '@apparatus/blocks-molecules-button/meta'
import * as ButtonIcon from '@apparatus/blocks-molecules-button-icon/meta'
import * as Card from '@apparatus/blocks-molecules-card/meta'
import * as Input from '@apparatus/blocks-molecules-input/meta'
import * as Text from '@apparatus/blocks-molecules-text/meta'

export const components: TComponents = {
  AtomBackground: () => Promise.resolve(AtomBackground),
  AtomBorder: () => Promise.resolve(AtomBorder),
  AtomFootprint: () => Promise.resolve(AtomFootprint),
  AtomIcon: () => Promise.resolve(AtomIcon),
  AtomInput: () => Promise.resolve(AtomInput),
  AtomSpacer: () => Promise.resolve(AtomSpacer),
  AtomText: () => Promise.resolve(AtomText),
  ContextInterface: () => Promise.resolve(ContextInterface),
  Button: () => Promise.resolve(Button),
  ButtonIcon: () => Promise.resolve(ButtonIcon),
  Card: () => Promise.resolve(Card),
  Input: () => Promise.resolve(Input),
  Text: () => Promise.resolve(Text),
}
