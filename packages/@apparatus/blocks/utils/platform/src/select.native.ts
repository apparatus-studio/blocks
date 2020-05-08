import { Platform } from 'react-native'

export const isNative = true

export const isWeb = false

export default <T>(options: { [key: string]: T }) => {
  if (Platform.OS in options) {
    return options[Platform.OS]
  }

  if ('ios' in options) {
    return options.ios
  }

  if ('android' in options) {
    return options.android
  }

  if ('native' in options) {
    return options.native
  }

  if ('default' in options) {
    return options.default
  }

  throw new Error('Unable to select platform')
}
