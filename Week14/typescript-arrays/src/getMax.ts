

function getMax(arr : number[]) : number
{
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let maxValue = arr[0];


    for(let i=1; i<arr.length; i++)
    {
        if(arr[i]! > maxValue!)
        {
            maxValue = arr[i];
        }
    }


    return maxValue!;
}




// function getMax(arr: number[]): number {
//   if (arr.length === 0) throw new Error("Array cannot be empty");
//   return Math.max(...arr);
// }


const ans = getMax([1,2,3,4,5])

console.log(ans)