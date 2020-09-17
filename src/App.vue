<template>
    <v-app>

        <AppBarComponent/>

        <NavigationDrawerComponent/>

        <v-main>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-main>

        <FooterComponent/>

    </v-app>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"
    import AppBarComponent from "@/components/AppBarComponent.vue"
    import FooterComponent from "@/components/FooterComponent.vue"
    import NavigationDrawerComponent from "@/components/NavigationDrawerComponent.vue"

    @Component({ components: {NavigationDrawerComponent, FooterComponent, AppBarComponent} })
    export default class App extends Vue {

    }
</script>