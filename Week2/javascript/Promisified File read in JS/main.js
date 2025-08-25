const fs = require("fs");


function readTheFile(finalValue)
{
    fs.readFile("a.txt","UTF-8", function(err,data){
        finalValue(data)
    })
}


function readfile()
{
    return new Promise(readTheFile)
}

const p = readfile();

function callback(contents)
{
    console.log(contents)
}
p.then(callback)