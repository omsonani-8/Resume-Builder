
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config(); 
exports.signUp = async (req, res) => {

    try {
        const {name,password,email,role} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json(
                {
                    success: false, 
                    message: "User already exists"
                }
                )
            }
            let hashPassword ;
            try{
                hashPassword = await bcrypt.hash(password,10);
             
            }catch(e){
                res.status(500).send({
                    success:false,
                    message: e.message || "Some error occurred while creating the user."
                });
            }
        const user =  new User({name,password:hashPassword,email,role});

        const savedUser = await user.save();
        res.status(201).json({
            message: "User created successfully",
            user: savedUser
        })

    }
    catch (err) {
        res.status(500).send({
            success:false,
            message: err.message || "Some error occurred while creating the user."
        });
    }

}


exports.Login = async (req, res) => {

    try{
        const {email, password} = req.body;
        if(!email ||!password)
        {
           return  res.status(400).json({
                success:false,
                message: "Please provide email and password"
            })
        }
        let user = await User.findOne({email});
        if(!user){
           return  res.status(401).json({
                success:false,
                message: "User not found"
            })
        }  
        const payload = {
            email: user.email,
            id: user._id,
            role: user.role 
        }

        if(await bcrypt.compare(password,user.password))
        {
            let token = jwt.sign(payload,process.env.JWT_SECRET,
            {
                expiresIn: "2h",
            });

        user = user.toObject();
        user.token = token;
        user.password = undefined;
        // console.log(token);
        console.log(user.token);
        const options= {
            expires: new Date(Date.now() + 1000 ),
            httpOnly: true
        }
             
          return   res.cookie("Token",token,options).status(200).json({
                success:true,
                message: "Login successful",
                user,token,
            });
  
        }
        else{
            return res.status(404).json({
                success:false,
                message: "Invalid password" 
            })
        }

    }catch(err){
        res.status(500).send({
            success:false,
            message: err.message || "Some error occurred while creating the user."
        });
    }
}