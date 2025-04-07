import { defineConfig } from 'unocss'
import {
  presetWind3,
} from "unocss";
import presetCorvu from '@corvu/unocss'

export default defineConfig({
  // ...
  theme: {
    colors:
    {
      corvu: {
        bg: '#f3f1fe',
        100: '#e6e2fd',
        200: '#d4cbfb',
        300: '#bcacf6',
        400: '#a888f1',
        text: '#180f24',
      },

    },
  },
  presets: [
    presetWind3(),
    // Use it with the default prefix 'corvu'
    presetCorvu(),
  ],
})
