import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'REACT_APP_'  // This line tells Vite to expose all environment variables that start with REACT_APP_
});

