const {Router} = require('express');

const userRouter = Router();

const {signUp} = require("../controller/userController.js");
const {Login} = require("../controller/userController.js");
const {auth,isStudent,isAdmin} = require("../middlewares/auth.js");
// const {Login} = require("../controller/userController.js");
const {userData} = require("../controller/userResume.js");

const {getAllResume} = require("../controller/userResume.js");
const {createUser} = require("../controller/userData.js");


userRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


  userRouter.post('/users', createUser);
  
userRouter.post('/registaion/user',signUp);
userRouter.post('/user/userResume',userData);

userRouter.post('/user/allResume',getAllResume);



userRouter.post('/login',Login);
userRouter.get('/test',auth,(req,res)=>{
    res.json({
        success: true,
        message:"welcome to the test server"
    });
    console.log("authentication successful");
});

userRouter.get('/student',auth,isStudent,(req,res)=>{
    res.json({
        success: true,
        message:"welcome to the Student protected routes"
    });

    // console.log("authentication successful with student");
});


userRouter.get('/admin',auth,isAdmin,(req,res)=>{
    res.json({
        success: true,
        message:"welcome to the admin protected routes"
    });

    // console.log("authentication successful with admin");
});

module.exports = userRouter; 