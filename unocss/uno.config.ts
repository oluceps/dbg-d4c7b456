import { defineConfig } from 'unocss'
import {
  presetWind3,
} from "unocss";
import presetCorvu from '@corvu/unocss'

export default defineConfig({
  // ...
  theme: {
    colors: {
      corvu: {
        bg: '#f3f1fe',
        100: '#e6e2fd',
        200: '#d4cbfb',
        300: '#bcacf6',
        400: '#a888f1',
        text: '#180f24',
      },

    },
    animation: {
      keyframes: {
        custom: '{0%, 100% { transform: scale(0.5); } 50% { transform: scale(1); }}',
      },
      durations: {
        custom: '1s',
      },
      timingFns: {
        custom: 'cubic-bezier(0.4,0,.6,1)',
      },
      properties: {
        custom: { 'transform-origin': 'center' },
      },
      counts: {
        custom: 'infinite',
      },
    }
  },
  presets: [
    presetWind3(),
    // Use it with the default prefix 'corvu'
    presetCorvu(),
  ],
})
