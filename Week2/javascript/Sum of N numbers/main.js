function sumNums(num)
{
    let sum = 0;
    for(let i=1; i<=num; i++)
    {
        sum = sum + i;
    }
    return sum;
}


let numb = 10;

let ans = sumNums(numb);

console.log(ans);