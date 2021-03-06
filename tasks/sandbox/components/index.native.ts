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
import * as ActionSheet from '@apparatus/blocks-molecules-action-sheet/meta'
import * as Bottom from '@apparatus/blocks-molecules-bottom/meta'
import * as Button from '@apparatus/blocks-molecules-button/meta'
import * as ButtonIcon from '@apparatus/blocks-molecules-button-icon/meta'
import * as Card from '@apparatus/blocks-molecules-card/meta'
import * as ChatBubble from '@apparatus/blocks-molecules-chat-bubble/meta'
import * as ContextHeader from '@apparatus/blocks-molecules-context-header/meta'
import * as DateInput from '@apparatus/blocks-molecules-date-input/meta'
import * as FullCover from '@apparatus/blocks-molecules-full-cover/meta'
import * as Input from '@apparatus/blocks-molecules-input/meta'
import * as ListOption from '@apparatus/blocks-molecules-list-option/meta'
import * as MainScrollable from '@apparatus/blocks-molecules-main-scrollable/meta'
import * as Overlay from '@apparatus/blocks-molecules-overlay/meta'
import * as SideNavigation from '@apparatus/blocks-molecules-side-navigation/meta'
import * as StickyButton from '@apparatus/blocks-molecules-sticky-button/meta'
import * as TabSelector from '@apparatus/blocks-molecules-tab-selector/meta'
import * as Text from '@apparatus/blocks-molecules-text/meta'
import * as TimeInput from '@apparatus/blocks-molecules-time-input/meta'
import * as Toast from '@apparatus/blocks-molecules-toast/meta'
import * as Toggle from '@apparatus/blocks-molecules-toggle/meta'

export const components: TComponents = {
  AtomBackground: () => Promise.resolve(AtomBackground),
  AtomBorder: () => Promise.resolve(AtomBorder),
  AtomFootprint: () => Promise.resolve(AtomFootprint),
  AtomIcon: () => Promise.resolve(AtomIcon),
  AtomInput: () => Promise.resolve(AtomInput),
  AtomSpacer: () => Promise.resolve(AtomSpacer),
  AtomText: () => Promise.resolve(AtomText),
  ContextInterface: () => Promise.resolve(ContextInterface),
  ActionSheet: () => Promise.resolve(ActionSheet),
  Bottom: () => Promise.resolve(Bottom),
  Button: () => Promise.resolve(Button),
  ButtonIcon: () => Promise.resolve(ButtonIcon),
  Card: () => Promise.resolve(Card),
  ChatBubble: () => Promise.resolve(ChatBubble),
  ContextHeader: () => Promise.resolve(ContextHeader),
  DateInput: () => Promise.resolve(DateInput),
  FullCover: () => Promise.resolve(FullCover),
  Input: () => Promise.resolve(Input),
  ListOption: () => Promise.resolve(ListOption),
  MainScrollable: () => Promise.resolve(MainScrollable),
  Overlay: () => Promise.resolve(Overlay),
  SideNavigation: () => Promise.resolve(SideNavigation),
  StickyButton: () => Promise.resolve(StickyButton),
  TabSelector: () => Promise.resolve(TabSelector),
  TimeInput: () => Promise.resolve(TimeInput),
  Text: () => Promise.resolve(Text),
  Toast: () => Promise.resolve(Toast),
  Toggle: () => Promise.resolve(Toggle),
}
