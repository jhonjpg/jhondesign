// postcss.config.cjs
module.exports = {
    plugins: [
        require('@tailwindcss/postcss'), // Cambiado a la nueva forma
        require('autoprefixer'),
    ],
};