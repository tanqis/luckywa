export default {
    getArgsByUrl() {
        const hash = window.location.hash
        const argsStr = hash.substring(hash.indexOf('?') + 1, hash.length)
        const args = argsStr.split('&')
        let obj = {}
        for (let i = 0; i < args.length; i++) {
            const arr = args[i].split('=')
            obj[arr[0]] = arr[1]
        }
        return obj;
    },
    isNull(val) {
        let bool = true
        if (val) {
            bool = false
        }
        return bool
    }
}