function countInstances(word, string) {
    return string.split(word).length - 1;
}

console.log(countInstances('aa',  "аааааа"))