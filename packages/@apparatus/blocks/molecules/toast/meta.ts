import { TComponentConfig } from 'autoprops'
import { FEEDBACK_STATE_ERROR, FEEDBACK_STATE_SUCCESS } from '@apparatus/blocks-particles-feedback-states'
import { Toast, TToast } from './src'

export const config: TComponentConfig<TToast> = {
  props: {
    children: [
      'Success',
      'Error!',
    ],
    feedbackState: [
      FEEDBACK_STATE_ERROR,
      FEEDBACK_STATE_SUCCESS,
    ],
  },
  required: ['children', 'feedbackState'],
}

export const Component = Toast

export { default as packageJson } from './package.json'
