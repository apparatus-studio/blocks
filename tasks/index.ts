import plugin from '@start/plugin'
import {
  CheckChromeScreenshots,
  CheckFirefoxScreenshots,
  CheckIosScreenshots,
  CheckAndroidScreenshots,
  CheckIosWebScreenshots,
  CheckAndroidWebScreenshots,
  Sandbox,
  CheckChromePerfSnapshots,
} from '@bubble-dev/start-preset'

export * from '@bubble-dev/start-preset'

const FONTS_DIR = 'assets/fonts/'

export const checkChromeScreenshots = CheckChromeScreenshots(FONTS_DIR)
export const checkFirefoxScreenshots = CheckFirefoxScreenshots(FONTS_DIR)
export const checkAndroidScreenshots = CheckAndroidScreenshots(FONTS_DIR)
export const checkIosScreenshots = CheckIosScreenshots(FONTS_DIR)
export const checkIosWebScreenshots = CheckIosWebScreenshots(FONTS_DIR)
export const checkAndroidWebScreenshots = CheckAndroidWebScreenshots(FONTS_DIR)
export const checkChromePerfSnapshots = CheckChromePerfSnapshots(FONTS_DIR)

export const sandbox = Sandbox({
  entryPointPath: './tasks/sandbox/index.tsx',
  htmlTemplatePath: './tasks/sandbox/templates/dev.html',
  fontsDir: FONTS_DIR,
})

export const xray = () =>
  plugin('ui', ({ logMessage }) => async () => {
    const { runWebApp } = await import('@rebox/web')
    const { runXRayServer } = await import('./x-ray-ui/run-server')

    await runXRayServer()

    await runWebApp({
      entryPointPath: './tasks/x-ray-ui/index.tsx',
      htmlTemplatePath: './tasks/x-ray-ui/template.html',
      isQuiet: true,
    })

    logMessage('http://localhost:3000/')
  })

export const run = (file: string) =>
  plugin('main', () => async () => {
    const { resolve } = await import('path')
    const { main } = await import(resolve(file))

    await main()
  })
