import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.tsx'), // build entry 경로
            name: 'components-lib', // exposed global variable
            fileName: 'components-lib', // build file name
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React',
                },
            },
        },
        commonjsOptions: {
            esmExternals: ['react'],
        },
    },
    plugins: [react(), dts()],
});
