import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/project_3D_developer_portfolio/',  // your GitHub repo name with slashes
  plugins: [react()]
})
