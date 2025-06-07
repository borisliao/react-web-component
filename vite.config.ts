import { defineConfig } from 'vite'
// import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/main-web-component.tsx",
      fileName: (format) => `${process.env.npm_package_name}.${format}.js`,
      name: process.env.npm_package_name,
    },
    target: "es2015",
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'index.html'),
    //   },
    // },
  },
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
    "import.meta.env.VITE_npm_package_name": JSON.stringify(process.env.npm_package_name),
  },
}));
