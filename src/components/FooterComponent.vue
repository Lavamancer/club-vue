<template>
<!--    <v-footer color="accent lighten-1">-->
    <v-footer color="grey">
        <v-row justify="center">
<!--            <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">-->
<!--                {{ link }}-->
<!--            </v-btn>-->
<!--            <v-col class="secondary py-2 text-center white&#45;&#45;text" cols="12">-->
<!--                &copy; {{ new Date().getFullYear() }} — <strong>{{projectName}}</strong>-->
<!--            </v-col>-->
<!--            <v-col class="py-2 white text-center accent&#45;&#45;text" cols="12">-->
            <v-col class="py-1 text-center white--text overline" cols="12">
                &copy; {{ new Date().getFullYear() }} <strong>{{projectName}}</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Constants from "@/config/Constants"
    // import ConstantTool from "@/services/tool/ConstantTool";

    @Component
    export default class FooterComponent extends Vue {
        projectName: string = Constants.PROJECT_NAME
    }
</script>
