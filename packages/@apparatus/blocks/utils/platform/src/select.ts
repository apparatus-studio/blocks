export const isNative = false

export const isWeb = true

export default <T>(options: { web?: T, default?: T, native?: T, ios?: T, android?: T }) => {
  if ('web' in options) {
    return options.web
  }

  if ('default' in options) {
    return options.default
  }

  throw new Error('Unable to select platform')
}
