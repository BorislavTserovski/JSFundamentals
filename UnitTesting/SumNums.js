function solve(arr){
    let sum = 0;
    for (let num of arr)
        sum += Number(num);
    return sum;

}