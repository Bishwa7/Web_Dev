let x: number = 1
console.log(x)




// greet

function greet(name: string)
{
    console.log(`Hello ${name}`)
}
greet("Bishwa")







// sum
function sum(a: number, b: number): number{
    return a + b
}

let ans = sum(1,2)
console.log(ans)







// function taking another function and running it after 1sec

function delayed(fn: ()=> void)
{
    setTimeout(fn,1000)
}

delayed(function(){
    console.log("Hello")
})






// delayed2 function takes sum2 function and runs after 1 second

function delayed2 (fn:(a:number, b:number) => number, a:number, b:number): void{

    setTimeout(()=>{
        const ans = fn(a,b)
        console.log(ans)
    },5000)
}

function sum2(a: number, b: number){
    return a + b
}

delayed2(sum2,1,2)