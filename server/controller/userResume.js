const User = require("../model/userResume");
const loginUser = require("../model/userModel");
// const { ObjectId } = mongoose.Types;

exports.userData = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = new User(req.body);
    const userResume = await user.save();
    console.log(userResume);
    const updatePosts = await loginUser.findByIdAndUpdate(
      userId,
      {
        $push: { resume: userResume._id },
      },
      { new: true }
    );

    res.status(201).json({
      message: "User created successfully",
      data: updatePosts,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message || "Some error occurred while creating the user.",
    });
  }
};

exports.getAllResume = async (req, res) => {
  try {
    const {userId} = req.body;
    const user = await loginUser.findOne({ _id: userId });
    // console.log(user.resume);
    // const {resume} = user.resume;
    // console.log(resume);

    const ids = user.resume;
    console.log(ids);
    
      User.find({ _id: { $in: ids } })
      .then((documents) => {
        console.log(documents);
        res.status(200).send({
            success: true,
             data: documents,
          });
      })
      .catch((err) => {
        console.error(err);
      });
    
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err || "Some error occurred while creating the user.",
    });
  }
};
