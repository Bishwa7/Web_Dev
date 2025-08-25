function checkEvenOdd(num)
{
    if(num%2 === 0)
    {
        return true;
    }
    else{
        return false;
    }
}

let num = 12;

let ans = checkEvenOdd(num);

if(ans)
{
    console.log("Number is Even");
}
else{
    console.log("number is Odd");
}
