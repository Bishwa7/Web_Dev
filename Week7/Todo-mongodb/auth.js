const jwt = require("jsonwebtoken");
const JWT_SECRET = "BishwaHelloBrotherCR7MonekyDLuffyDrazonBallZNarutoUzumaki";

function auth(req, res, next) {
    const token = req.headers.token;

    if(token)
    {
        jwt.verify(token, JWT_SECRET, (err, decoded)=>{
            if(err)
            {
                res.status(401).send({
                    message: "unauthorized1"
                })
            }
            else{
                req.userId = decoded.id;
                next();
            }
        })
    }
    else{
        res.status(401).send({
            message: "unauthorized2"
        })
    }
}

    

module.exports = {
    auth,
    JWT_SECRET
}