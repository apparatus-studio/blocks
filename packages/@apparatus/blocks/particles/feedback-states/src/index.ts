export type TFeedbackState = symbol & { type: 'InteractiveState' }

export const FEEDBACK_STATE_SUCCESS = Symbol('FEEDBACK_STATE_SUCCESS') as TFeedbackState
export const FEEDBACK_STATE_ERROR = Symbol('FEEDBACK_STATE_ERROR') as TFeedbackState
