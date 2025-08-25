console.log("Welcome to loupe.");

function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback)

// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");

// let c=0;
// for(let i=0; i<10000000000; i++)
// {
//     c++;
// }

// console.log(c);