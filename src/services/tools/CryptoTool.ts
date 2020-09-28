export default class CryptoTool {

    static readonly CRYPTO_KEY = "uf8dkrCPK53mtYgdZa53LtDDRKBAhnpbrV8TKQp55b7X9M8aj7KXaUDE67UMNbuM"
    static readonly CRYPTO = require("crypto-js")

    static encrypt(object: string): string {
        return this.CRYPTO.AES.encrypt(object, this.CRYPTO_KEY).toString()
    }

    static decrypt(object: string): string {
        let bytes = this.CRYPTO.AES.decrypt(object, this.CRYPTO_KEY)
        return bytes.toString(this.CRYPTO.enc.Utf8);
    }

}