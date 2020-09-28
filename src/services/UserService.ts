import {Vue} from "vue-property-decorator"
import {getModule} from "vuex-module-decorators"
import SessionModule from "@/modules/SessionModule"
import Authority, {AuthorityName} from "@/models/Authority"

export default class UserService {

    static postLogin(component: Vue, username: string, password: string) {
        console.log("Hello postlogin")
        // TODO mock login
        let sessionModule = getModule(SessionModule)
        sessionModule.session.token = "Bearer " + "1234-1234-1234-1234-1234"
        // sessionModule.session.user = loginResponse.user!

        let authority: Authority = new Authority()
        authority.name = AuthorityName.ROLE_USER
        sessionModule.session.authorities = [authority]

        if (component.$route.query.redirect) {
            component.$router.push({path: component.$route.query.redirect as string});
        } else {
            component.$router.push({path: "/"})
        }
    }

    static getUser(userId: number)  {
        return Vue.axios.get("https://jsonplaceholder.typicode.com/users/" + userId)
            .then(response => {
                // TODO implement service stuff
                return response
            })
    }


}