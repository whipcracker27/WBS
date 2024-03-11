import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';
import tsconfigPaths from 'vite-tsconfig-paths';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tsconfigPaths(),
    compression({algorithm: 'brotliCompress'}),
    // basicSsl()
  ],
})
