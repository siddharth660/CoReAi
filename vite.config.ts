import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: /^(.*)@\d+\.\d+\.\d+$/, replacement: '$1' },
        ],
    },
});


