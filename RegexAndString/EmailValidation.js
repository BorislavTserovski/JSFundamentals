function emailValidation(email) {
    const regex = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/gm
    console.log(regex.test(email) ? 'Valid' : 'Invalid')
}

emailValidation('valid@email.bg')