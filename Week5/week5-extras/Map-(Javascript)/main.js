// Q-> Given an array, give me back a new array where each value is multiplied by Int32Array

const arr = [1,2,3,4,5]

function multiFunc(n)
{
    return n*2
}


const arr2 = arr.map(multiFunc)

console.log(arr2)
console.log(arr)