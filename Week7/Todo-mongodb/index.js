const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
//const JWT_SECRET = "BishwaHelloBrotherCR7MonekyDLuffyDrazonBallZNarutoUzumaki"

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:L2uaLILIrLCXyLGn@cluster0.c50lnwj.mongodb.net/todo-db-app");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");

const {z} = require("zod")



const app = express()
app.use(express.json())

// signup logic
app.post("/signup", async function(req, res){

    const requiredBody = z.object({
        email: z.email(),
        name: z.string().min(5).max(30),
        password: z.string().min(8).max(20)
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
        .regex(/[0-9]/, { message: "Password must contain at least one number." })
        .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character." })
    })

    // const parsedDataNotSafe = requiredBody.parse(req.body);
    const parsedData = requiredBody.safeParse(req.body);

    if(!parsedData.success){
        res.json({
            message: "incorrect format",
            error: parsedData.error
        })
        return
    }


    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;


    try{
        const hashedPassword = await bcrypt.hash(password, 5);

        await UserModel.create({
            email: email,
            name: name,
            password: hashedPassword
        })

        res.json({
            message: "You are signed up"
        })
    }
    catch(e){
        console.log("error while signup (db entry)")

        res.json({
            message: "User already exists"
        })
    }
})



// signin logic
app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })

    if(!user)
    {
        res.json({
            message: "Incorrect Credentials"
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password);


    if(passwordMatch){
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})




// creating todo logic
app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;


    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});




// fetching todos logic
app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000)