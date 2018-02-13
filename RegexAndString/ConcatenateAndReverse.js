function concatAndReverse(str) {
    return str.join("").split("").reverse().join("");
}


concatAndReverse(['I', 'am', 'student'])