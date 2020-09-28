export default class Constants {

    static readonly BASE_URL = process.env.VUE_APP_BASE_URL
    static readonly ENCRYPT_SESSION: boolean = process.env.VUE_APP_ENCRYPT_SESSION === "true"
    static readonly PROJECT_NAME = "Club Cordillera"

}