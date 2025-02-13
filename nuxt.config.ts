// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@ant-design-vue/nuxt'],
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    },
    ssr:false
})
