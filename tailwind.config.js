// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme'); // Penting untuk fallback font default

/** @type {import('tailwindcss').Config} */
module.exports = {
    // Pastikan semua path file Anda yang berisi kelas Tailwind terdaftar di sini
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.ts',
        './resources/**/*.tsx',
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php', // Jika relevan
    ],
    theme: {
        extend: {
            colors: {
            },
            fontFamily: {
                // The keys here ('creato' and 'rushing') become your Tailwind classes
                creato: ['"Creato-Display"', ...defaultTheme.fontFamily.sans],
                rushing: ['"Rushing-Shine"', ...defaultTheme.fontFamily.sans],
            },
            // ... Anda bisa menambahkan ekstensi tema lainnya di sini, seperti colors, spacing, dll.
        },
    },
    plugins: [
        // ... Masukkan semua plugin Tailwind CSS yang Anda gunakan di sini
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography'),
        // require('tailwindcss-animate'),
    ],
};