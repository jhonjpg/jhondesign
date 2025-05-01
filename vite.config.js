import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    plugins: [{
            base: '/jhondesign/',
        },
        tailwindcss(),
    ],
})