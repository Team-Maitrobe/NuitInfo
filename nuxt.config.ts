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
    }
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
    darkTheme: "christmas", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n']
})