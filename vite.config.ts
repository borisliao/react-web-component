import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  base: `/${process.env.npm_package_name}/`,
  build: {
    lib: {
      entry: "./src/main-web-component.tsx",
      fileName: (format) => `${process.env.npm_package_name}.${format}.js`,
      name: process.env.npm_package_name,
    },
    target: "es2015",
  },
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
    "import.meta.env.VITE_npm_package_name": JSON.stringify(process.env.npm_package_name),
  },
}));
