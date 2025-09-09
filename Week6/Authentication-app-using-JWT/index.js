const express = require("express");
const jwt = require("jsonwebtoken")

const JWT_SECRET = "BishwanathPaulHelloBrokamehamehaMonekyDluffyNaruto"

const app = express();

app.use(express.json())

const users = [];


app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed up"
    })

    console.log(users)
})

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        // foundUser.token = token;
        
        res.send({
            token
        })
        console.log(users);
    } 
    else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
})

app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    const username = decodedInfo.username;

    const foundUser = users.find(user => user.username === username);

    if (foundUser) {
        res.send({
            username: foundUser.username,
            password: foundUser.password
        })
    } 
    else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

app.listen(3000);