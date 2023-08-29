/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'src/App.vue',
        'src/components/Header.vue',
        'src/components/Footer.vue',
        'src/views/ContactView.vue',
        'src/components/Map.vue',
        'src/components/Message.vue',
        'src/components/Link.vue',
        'src/components/Menu.vue',
    ],
    theme: {
        extend: {
            //Custom font
            fontFamily: {
                custom: ['Nunito']
            }
        },
    },
    plugins: [],
}

