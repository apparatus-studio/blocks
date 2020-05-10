import { TComponents } from '@sandbox/ui'

export const components: TComponents = {
  AtomBackground: () => import('@apparatus/blocks-atoms-background/meta' /* webpackChunkName: "AtomBackground" */),
  AtomBorder: () => import('@apparatus/blocks-atoms-border/meta' /* webpackChunkName: "AtomBorder" */),
  AtomFootprint: () => import('@apparatus/blocks-atoms-footprint/meta' /* webpackChunkName: "AtomFootprint" */),
  AtomIcon: () => import('@apparatus/blocks-atoms-icon/meta' /* webpackChunkName: "AtomIcon" */),
  AtomInput: () => import('@apparatus/blocks-atoms-input/meta' /* webpackChunkName: "AtomInput" */),
  AtomSpacer: () => import('@apparatus/blocks-atoms-spacer/meta' /* webpackChunkName: "AtomSpacer" */),
  AtomText: () => import('@apparatus/blocks-atoms-text/meta' /* webpackChunkName: "AtomText" */),
  ContextInterface: () => import('@apparatus/blocks-contexts-interface/meta' /* webpackChunkName: "ContextInterface" */),
  ActionSheet: () => import('@apparatus/blocks-molecules-action-sheet/meta' /* webpackChunkName: "ActionSheet" */),
  Button: () => import('@apparatus/blocks-molecules-button/meta' /* webpackChunkName: "Button" */),
  ButtonIcon: () => import('@apparatus/blocks-molecules-button-icon/meta' /* webpackChunkName: "ButtonIcon" */),
  Card: () => import('@apparatus/blocks-molecules-card/meta' /* webpackChunkName: "Card" */),
  ChatBubble: () => import('@apparatus/blocks-molecules-chat-bubble/meta' /* webpackChunkName: "ChatBubble" */),
  Input: () => import('@apparatus/blocks-molecules-input/meta' /* webpackChunkName: "Input" */),
  ListOption: () => import('@apparatus/blocks-molecules-list-option/meta' /* webpackChunkName: "ListOption" */),
  Text: () => import('@apparatus/blocks-molecules-text/meta' /* webpackChunkName: "Text" */),
  Toast: () => import('@apparatus/blocks-molecules-toast/meta' /* webpackChunkName: "Toast" */),
  Toggle: () => import('@apparatus/blocks-molecules-toggle/meta' /* webpackChunkName: "Toggle" */),
}

