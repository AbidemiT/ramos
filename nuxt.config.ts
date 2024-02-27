// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/ui", 'nuxt-aos'],
  colorMode: {
    preference: 'light'
  },
  googleFonts: {
    families: {
      Urbanist: [200, 400, 500],
    },
  },
  imports: {
    dirs: ['store', 'utils', 'animations']
  }
});
