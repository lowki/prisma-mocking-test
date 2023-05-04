/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vitest-tsconfig-paths'

export default defineConfig({
  // Resolve paths from tsconfig.json files
  plugins: [tsconfigPaths()],
  test: {
    testTimeout: 30000,
    globals: true
  },
  logLevel: 'info',
  esbuild: {
    sourcemap: 'both'
  },
});
