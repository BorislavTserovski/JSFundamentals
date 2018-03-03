function validate(obj) {
    let uriRegex = /^[A-Za-z.0-9]+$/gm

    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']

    let messageRegex = /^([^><\\&'"]*$)/gm

    if (!obj.method || validMethods.indexOf(obj.method) < 0) {
        throw Error(`Invalid request header: Invalid Method`)
    }
    if (!obj.uri || !uriRegex.test(obj.uri)) {
        throw Error(`Invalid request header: Invalid URI`)
    }
    if (!obj.version || validVersions.indexOf(obj.version) < 0) {
        throw Error(`Invalid request header: Invalid Version`)
    }

    if (obj.message === undefined || !messageRegex.test(obj.message)) {
        throw Error(`Invalid request header: Invalid Message`)
    }

    return obj

}

console.log(validate(({
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    }
)))