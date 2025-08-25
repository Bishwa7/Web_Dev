const x = require("fs");

function print(err, content){
    // console.log("Error is = ")
    // console.log(err);
    // console.log("Content is = ")
    // console.log(content);
    
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(content)
    }
}

x.readFile("a.txt", "utf-8", print);    //Asynchronous

x.readFile("b.txt", "utf-8", print);    //Asynchronous



console.log("Done!!");