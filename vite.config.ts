import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/

// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig(({ mode }) => {

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)), 
      },
    },
    css: {
      modules: {
        generateScopedName:
          mode === "development"
            ? "[name]__[local]__[hash:base64:5]"
            : "[hash:base64:6]",
      },
    },
  }
});
