type sum = string | number;

function ans(x: sum, y: sum): sum {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y; 
    }
    return x.toString() + y.toString(); 
}



const ans1 = ans("4", 8)

console.log(ans1)