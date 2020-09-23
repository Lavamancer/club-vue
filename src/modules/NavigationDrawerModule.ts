import store from "@/store"
import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators"

@Module({dynamic: true, store, name: "NavigationDrawerModule"})
export default class NavigationDrawerModule extends VuexModule {

    enabled: boolean = false

    @Mutation
    closeOpenDrawer() {
        this.enabled = !this.enabled
    }

    @Mutation
    setEnabled(enabled: boolean) {
        this.enabled = enabled
    }

}
