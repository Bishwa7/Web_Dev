console.log("I will run immedietely");

function run() {
	console.log("I will run after 1s");
}

function run2() {
	console.log("I will run after 1s");
}
setTimeout(run, 8000);
setTimeout(run2, 2000);

for(let i=0; i<5; i++)
{
    console.log("I will run immedietely");
}


setTimeout(run, 2000);

for(let i=0; i<5; i++)
{
    console.log("I will run immedietely");
}

for(let i=0; i<3; i++)
{
    console.log("Final");
}

