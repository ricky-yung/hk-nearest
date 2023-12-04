import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command == 'build') {
    // production setting
    return {
      base: '/hk-nearest/',
      plugins: [
        vue(),
        VitePWA({
          registerType: 'autoUpdate',
          devOptions: {
            enabled: true
          }
        })
      ]
    }
  } else {
    return {
      plugins: [
        vue(),
        VitePWA({
          registerType: 'autoUpdate',
          devOptions: {
            enabled: true
          }
        })
      ]
    }
  }
  
})
