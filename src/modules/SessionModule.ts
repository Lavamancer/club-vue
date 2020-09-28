import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators"
import store from "@/store"
import Session from "@/models/vue/Session"
import CryptoTool from "@/services/tools/CryptoTool"
import Constants from "@/config/Constants"

@Module({dynamic: true, store, name: "SessionModule"})
export default class SessionModule extends VuexModule {

    session: Session = new Session()


    @Mutation
    setSession(session: Session) {
        this.session = session;
    }

    // @Mutation
    // addAuthority(authority: Authority) {
    //     if (!this.session.authorities.some(a => a.name == authority.name)) {
    //         this.session.authorities.push(authority)
    //     }
    // }
    //
    // @Mutation
    // removeAuthority(authority: Authority) {
    //     this.session.authorities = this.session.authorities.filter(a => a.name != authority.name)
    // }

    @Action
    saveSession() {
        try {
            let data
            if (Constants.ENCRYPT_SESSION) {
                data = CryptoTool.encrypt(JSON.stringify(this.session))
            } else {
                data = JSON.stringify(this.session)
            }
            localStorage.setItem(Session.LOCAL_STORAGE_KEY, data)
        } catch (e) {
            console.log("Error on saving session...")
            localStorage.removeItem(Session.LOCAL_STORAGE_KEY)
            this.setSession(new Session())
        }
    }

    @Action
    loadSession() {
        try {
            let data = localStorage.getItem(Session.LOCAL_STORAGE_KEY)
            if (data != null) {
                if (Constants.ENCRYPT_SESSION) {
                    let decryptedData = CryptoTool.decrypt(data);
                    this.setSession(JSON.parse(decryptedData))
                } else {
                    this.setSession(JSON.parse(data))
                }
            } else {
                this.setSession(new Session())
            }
        } catch (e) {
            console.log("Error on loading session...")
            localStorage.removeItem(Session.LOCAL_STORAGE_KEY)
            this.setSession(new Session())
        }
    }

}
