<template>

    <v-navigation-drawer app clipped v-model="enabled">
        <v-list>
            <v-list-item v-for="item in 4"><h2>Item {{item}}</h2></v-list-item>
        </v-list>
    </v-navigation-drawer>

</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"
    import {getModule} from "vuex-module-decorators"
    import NavigationDrawerModule from "@/modules/NavigationDrawerModule"

    @Component
    export default class NavigationDrawerComponent extends Vue {

        navigationDrawerModule: NavigationDrawerModule = getModule(NavigationDrawerModule)

        get enabled() {
            return this.navigationDrawerModule.enabled
        }
        set enabled(v: boolean) {
            this.navigationDrawerModule.setEnabled(v)
        }

    }
</script>