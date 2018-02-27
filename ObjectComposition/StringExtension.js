(function solve() {
    String.prototype.ensureStart = function (str) {
        let result = this
        let startsWith = this.startsWith(str)
        if (!startsWith) {
            result = str + result
        }
        return result
    };

    String.prototype.ensureEnd = function (str) {
        let result = this
        let endsWith = this.endsWith(str)
        if (!endsWith) {
            result += str
        }
        return result
    };

    String.prototype.isEmpty = function () {
        return this === null || this.match(/^ *$/) !== null
    };

    String.prototype.truncate = function (n) {
        if (this.length < n) {
            return this
        }
        if (this.indexOf(' ') === -1) {
            let result = this
            result = result.slice(0, -n)
            result += '...'
            return result
        }
        let result = this.substring(0, n)
        let index = result.lastIndexOf(' ')
        result = result.substring(0, index)
        result += '...'
        return result

    };
    Object.assign(String, {
        format(str, ...params) {
            let regex = /{[0-9]+}/g
            let m;
            result = str

            while ((m = regex.exec(str)) !== null) {
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                result.replace(m, ...params[m.index])

            }
        }
    })


})()