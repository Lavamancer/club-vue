<template>

    <v-app-bar app clipped-left color="primary">
        <v-app-bar-nav-icon @click="myMethod()" class="ml-2" color="white" large></v-app-bar-nav-icon>
    </v-app-bar>

</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"
    import {getModule} from "vuex-module-decorators"
    import NavigationDrawerModule from "@/modules/NavigationDrawerModule"

    @Component
    export default class AppBar extends Vue {

        myMethod() {
            getModule(NavigationDrawerModule).closeOpenDrawer()
        }

    }
</script>