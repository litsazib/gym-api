var jwt = require('jsonwebtoken');
let Key = "GYM@2022"
exports.CreateToken = (req,res)=>{
    
    let Payload = {
        // exp:Math.floor(Date.now() / 1000) + (20)
        exp:Math.floor(Date.now() / 1000) + (72*60*60),
        date:{auth:"authorization successful"}
    }
    
    let Token = jwt.sign(Payload,Key);
    res.send(Token);
}


exports.DecodeToken = (req,res)=>{
    let Token = req.headers['token']
    jwt.verify(Token,Key,(err,decoded)=>{
        if(err){
            res.status(401).json({status:"invalid token",data:err})
        }
        else {
            res.status(200).json({status:"success",data:decoded})
        }
    })
}
