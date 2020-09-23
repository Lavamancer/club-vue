<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class="pa-5">
                    <v-card-title>
                        <h1>Home</h1>
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum enim error ex explicabo facilis iste maxime mollitia, natus nesciunt nihil perspiciatis placeat provident quia quos reiciendis repellendus repudiandae veniam.
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer/>
                        <v-progress-circular v-if="progressBar" class="mr-5" indeterminate/>
                        <v-btn @click="getUsers()" class="primary">Users</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card class="pa-5">
                    <v-card-title>
                        <h1>Result</h1>
                    </v-card-title>
                    <v-card-text>
                        {{result}}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"
    import UserService from "@/services/UserService"
    import User from "@/models/User"
    import {JsonConvert} from "json2typescript"

    @Component
    export default class Home extends Vue {

        progressBar: boolean = false
        result: string = ""

        getUsers() {
            this.progressBar = true
            try {
                const response = UserService.getUser(1)
                response.then(response => {
                    let user: User = new JsonConvert().deserializeObject(response.data, User)
                    this.result = "id: " + user.id + ", name: " + user.name + ", email: " + user.email
                })
            } catch (e) {
                console.log("Error")
            } finally {
                setTimeout(() => {
                    this.progressBar = false
                }, 1000)
            }
        }


    }
</script>
