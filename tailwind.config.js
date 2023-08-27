/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ 'src/App.vue', 'src/components/Header.vue', 'src/components/Footer.vue' ],
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

