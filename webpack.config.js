const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Точка входа для вашего приложения
    output: {
        path: path.resolve(__dirname, 'dist'), // Директория для выходных файлов
        filename: 'bundle.js', // Имя выходного файла
        publicPath: '/' // Публичный путь для статических файлов
    },
    mode: 'development', // Режим разработки
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Обработка файлов .js и .jsx
                exclude: /node_modules/, // Исключение папки node_modules
                use: {
                    loader: 'babel-loader', // Использование babel-loader
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'] // Предустановки Babel
                    }
                }
            },
            {
                test: /\.css$/, // Обработка файлов .css
                use: ['styles-loader', 'css-loader'] // Использование styles-loader и css-loader
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Обработка изображений
                type: 'asset/resource', // Использование встроенного плагина Webpack для обработки ресурсов
                generator: {
                    filename: 'images/[name][hash][ext][query]' // Путь для выходных файлов изображений
                }
            },
            {
                test: /\.svg$/, // Обработка SVG файлов
                use: ['@svgr/webpack'] // Использование @svgr/webpack для работы с SVG как React компонентами
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html' // Шаблон HTML
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Расширения файлов, которые Webpack будет обрабатывать
        alias: {
            '@mui/material': '@mui/joy',
        },
    },
    devServer: {
        static: path.join(__dirname, 'dist'), // Директория для статических файлов
        compress: true, // Включение сжатия
        port: 3000, // Порт сервера
        historyApiFallback: true // Поддержка History API для React Router
    },
};
