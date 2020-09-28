import Constants from "@/config/Constants"
import User from "@/models/User"
import Authority from "@/models/Authority"

export default class Session {

    static readonly LOCAL_STORAGE_KEY = "ClubSession"

    token!: string
    user!: User
    authorities!: Authority[]

    dark: boolean = false

}