import {createLogger, defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true, // Следит за изменениями файлов
        },
    },
    build: {
        rollupOptions: {
            input: {
                test: path.resolve(__dirname, 'src/components/Test/index.jsx'),
                test2: path.resolve(__dirname, 'src/components/Test2/index.jsx'),
            },
            output: {
                entryFileNames: 'assets/[name].js', // Файлы компонентов
                chunkFileNames: 'assets/[name].js', // Файлы, если есть динамические импорты
                assetFileNames: 'assets/[name].[ext]', // Ассеты
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendors'; // Общий файл для библиотек
                    }
                },
            },
        },
    },
});
