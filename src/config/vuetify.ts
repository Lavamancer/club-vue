import Vue from 'vue'
import "vuetify/dist/vuetify.min.css"
import Vuetify from "vuetify"
import '@/config/style.css'

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        dark: false,
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#69bb47',
                secondary: '#28502c',
                accent: '#454545',
                error: '#d9534f',
                info: '#3da9de',
                success: '#509950',
                warning: '#f0ad4e'
            },
            dark: {
                primary: '#2c7873',
                secondary: '#454545',
                accent: '#a49200',
                error: '#d9534f',
                info: '#3da9de',
                success: '#00b879',
                warning: '#f0ad4e'
            }
        }
    },
    icons: {
        iconfont: 'mdi'
    }

})