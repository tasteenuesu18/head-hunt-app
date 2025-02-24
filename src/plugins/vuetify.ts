/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// import '@/styles/main.scss'
import "../styles/main.scss";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
    },
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#FF7043',
          secondary: '#78909C',
          accent: '#FFB74D',
          background: '#F5F5F5',
          surface: '#FFFFFF',
          success: '#81C784',
          warning: '#FFB74D',
          error: '#E57373',
          info: '#64B5F6',
        },
      },
      dark: {
        colors: {
          primary: '#FF8A65',
          secondary: '#90A4AE',
          background: '#424242',
          surface: '#616161',
        },
      },
    },
  },
});
