// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    modules: [
        '@nuxt/image-edge',
    ],
    image: {
        provider: 'static',
        presets: {
            cover: {
                modifiers: {
                    fit: "cover",
                    format: "webp",
                },
            },
        },
    },
    app: {
        head: {
            title: 'English Week 2023',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    key: 'description',
                    name: 'description',
                    content: "Présentation de la English Week 2023 du département informatique de l'IUT de Vannes"
                },
            ],
            link: [
                {rel: 'icon', type: 'image/png', href: '/english-week.png'},
            ],
            htmlAttrs: {
                lang: 'fr',
            }
        },
    }
})
