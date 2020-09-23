import {Vue} from "vue-property-decorator"

export default class UserService {

    static getUser(userId: number)  {
        return Vue.axios.get("https://jsonplaceholder.typicode.com/users/" + userId)
            .then(response => {
                // TODO implement service stuff
                return response
            })
    }


}