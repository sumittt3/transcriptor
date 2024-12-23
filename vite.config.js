import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      axios: require.resolve('axios'), // Ensures axios is resolved correctly
    },
  },
});
