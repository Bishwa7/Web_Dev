const express = require("express");
const app = new express();


var users = [{
    name:"John",
    kidneys: [{healthy : false},{healthy : true}]
}]

app.get("/", function (req, res){
    const johnKidneys = users[0].kidneys
    const numberOfKidneys = johnKidneys.length
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++)
    {
        if(johnKidneys[i].healthy)
        {
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({numberOfKidneys, numberOfHealthyKidneys, numberOfUnhealthyKidneys})
})


app.use(express.json());

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg : "Done"
    })
})



app.put("/", function(req, res){


    if(isThereatleastOneKidneyIsUnhealthy())
    {
        for(let i=0; i<users[0].kidneys.length; i++)
        {
            users[0].kidneys[i].healthy = true;
        }

        res.json({});
    }
    else{
        res.status(411).json({
            msg : "There are no unhealthy kidneys"
        })
    }
    
})



app.delete("/", function(req, res){

    if(isThereatleastOneKidneyIsUnhealthy())
    {
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++)
        {
            if(users[0].kidneys[i].healthy)
            {
                newKidneys.push({
                    healthy : true
                })
            }
        }

        users[0].kidneys = newKidneys;


        res.json({
            msg : "DOne"
        });
    }
    else{
        res.status(411).json({
            msg : "There are no unhealthy kidneys"
        })
    }

    
})


function isThereatleastOneKidneyIsUnhealthy()
{
    let atleastOneKidneyIsUnhealthy = false;
    for(let i=0; i<users[0].kidneys.length; i++)
    {
        if(!users[0].kidneys[i].healthy)
        {
            atleastOneKidneyIsUnhealthy = true;
        }
    }
    return atleastOneKidneyIsUnhealthy;

}




app.listen(3000);
