function usernames(array) {
    let names = []

    for (let user of array) {
        let tokens = user.split('@')
        let name = tokens[0] + '.'
        let domainParts = tokens[1].split('.')
        for (let part of domainParts) {
            name += part[0]
        }
        names.push(name)
    }


    return names.join(', ')
}

console.log(usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']))