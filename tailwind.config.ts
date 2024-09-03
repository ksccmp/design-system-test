import type { Config } from 'tailwindcss';
import { tokens } from './src/components/tokens';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            ...tokens,
        },
    },
    plugins: [],
};

export default config;
