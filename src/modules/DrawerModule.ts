import {Module, Mutation, VuexModule} from "vuex-module-decorators"
import store from "@/store"

@Module({dynamic: true, store, name: "DrawerModule"})
export default class DrawerModule extends VuexModule {

    enabled: boolean = true


    @Mutation
    toggleEnabled() {
        this.enabled = !this.enabled
    }

    @Mutation
    setEnabled(enabled: boolean) {
        this.enabled = enabled
    }

}