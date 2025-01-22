import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss';

export default defineConfig({
  plugins: [
    pluginReact(),
    // this plugin throw error
    // pluginTailwindCSS(),
  ],
});
