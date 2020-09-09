import Vue from 'vue';
import "vuetify/dist/vuetify.min.css"
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        dark: false,
        options: {
            customProperties: true
        }
    },
    icons: {
        iconfont: 'mdi'
    }

});
