// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Maitrobé"
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        christmas: {
        
"primary": "#b91c1c",
        
"secondary": "#f87171",
        
"accent": "#9f1239",
        
"neutral": "#fecdd3",
        
"base-100": "#fda4af",
        
"info": "#34d399",
        
"success": "#bbf7d0",
        
"warning": "#fed7aa",
        
"error": "#b91c1c",
        },
      },"dark"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
      preference:"christmas",
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  i18n: {
    locales: [
      // ...

      /**
       * Example definition with `files` for Spanish speaking countries 
       */
      {
        code: 'es-ES',
        name: 'Español (Spain)',
        // file with cache disabled
        file: 'es-ES.json'
      },
      {
        code: 'en-GB',
        name: 'English (Great Britain)',
        // strings and object configurations can be mixed
        file: 'en-GB.json'
      },
      {
        code: 'fr-FR',
        name: 'Français (France)',
        // strings and object configurations can be mixed
        file: 'fr-FR.json'
      },

      // ...
    ],
    lazy: true,
    langDir: 'languages',
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n']
})