const jwt = require('jsonwebtoken');

require("dotenv").config();

exports.auth = async (req, res, next) => {
    try {
        const token = req.body.token;
        // consol.log(token);
        if(!token) {
            return res.status(401).json({
                success:false,
                message: "No token provided"
            });
        }
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decoded);
            req.user = decoded;
            next();

        }catch(e){
            // console.log(e);
            res.status(401).json({
                success:false,
                message: "Invalid token provided"
            });
        } 
    }catch(err) {
        // console.log(err);
        res.status(500).send({
            success:false,
            message: err
        });
    }
}
exports.isStudent = async (req,res,next)=>{

    try{
        if(req.user.role!="student")
        {
            return res.status(401).json({
                success:false,
                message: "this is a protected student router"
            })
        }
        next();

    }catch(err){
        return res.status(500).json({
            success:false,
            message: "this is a protected student router"
        })

    }
}
exports.isAdmin = async (req,res,next)=>{

    try{
        if(req.user.role!="admin")
        {
            return res.status(401).json({
                success:false,
                message: err.message || "this is a protected admin router"
            })
        }
        next();

    }catch(err){
        return res.status(500).json({
            success:false,
            message: err.message || "Some error occurred while creating the user."
        })
    }
}