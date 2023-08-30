/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'src/App.vue',
        'src/components/Header.vue',
        'src/components/Footer.vue',
        'src/views/ContactView.vue',
        'src/components/ContactMap.vue',
        'src/components/ContactMessage.vue',
        'src/components/Link.vue',
        'src/components/Menu.vue',
        'src/views/AboutView.vue',
        'src/components/ContactNav.vue',
    ],
    theme: {
        extend: {
            //Custom font
            fontFamily: {
                custom: ['Nunito']
            },

            //background Image
            backgroundImage: {
                'bg-1': "url('src/assets/bg-1.png')",
                'bg-2': "url('src/assets/bg-2.png')",
                'bg-3': "url('src/assets/bg-3.png')",
                'bg-4': "url('src/assets/bg-4.png')",
                'bg-5': "url('src/assets/bg-5.png')",
                'bg-6': "url('src/assets/bg-6.png')",
                'bg-7': "url('src/assets/bg-7.png')",
                'bg-sm-1': "url('src/assets/bg-sm-1.png')",
                'bg-sm-2': "url('src/assets/bg-sm-2.png')",
                'bg-sm-3': "url('src/assets/bg-sm-3.png')",
                'bg-sm-4': "url('src/assets/bg-sm-4.png')",
                'bg-sm-5': "url('src/assets/bg-sm-5.png')",
                'bg-sm-6': "url('src/assets/bg-sm-6.png')",
            }
        },
    },
    plugins: [],
}

