<template>
    <v-app>
        <DrawerComponent/>
        <NavbarComponent/>
        <v-main>
            <router-view/>
            <DialogComponent/>
        </v-main>
        <FooterComponent/>
        <SnackbarComponent/>
    </v-app>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"
    import AppBarComponent from "@/components/AppBarComponent.vue"
    import FooterComponent from "@/components/FooterComponent.vue"
    import NavigationDrawerComponent from "@/components/NavigationDrawerComponent.vue"
    import DrawerComponent from "@/components/DrawerComponent.vue"
    import NavbarComponent from "@/components/NavbarComponent.vue"
    import DialogComponent from "@/components/DialogComponent.vue"
    import SnackbarComponent from "@/components/SnackbarComponent.vue"

    @Component({ components: {SnackbarComponent, DialogComponent, FooterComponent, NavbarComponent, DrawerComponent} })
    export default class App extends Vue {

        // created() {
        //     this.$vuetify.theme.dark = getModule(SessionModule).session.dark
        // }

        // isMenuDisplayed() {
        //     return this.$route.name != null && this.$route.name != "login"
        // }

    }
</script>