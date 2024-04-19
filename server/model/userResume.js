const mongoose = require("mongoose");

const userResume = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  basicInfo: {
    address: String,
    email: String,
    fullName: String,
    mobileNumber: String,
    profile: String,
    title: String,
  },
  education: [
    {
      degree: String,
      instituteName: String,
      location: String,
      percentageCGPA: String,
      startDate: String,
    },
  ],
  workExperience: [
    {
      description: String,
      employer: String,
      jobTitle: String,
      startDate: String,
    },
  ],
  skills: [String],
  achievements: [
    {
      title:String,
      date:String,
      description:String,
    },
  ],
  projects: [
    {
      projectName: String,
      saveDes: [String],
    },
  ],
  socialLinks: {
    type: Object,
    default: {},
  },
  name: {
    type: String,
    trim: true,
  },
  id: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    trim: true,
  },
  resumeName:{
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model("userResume", userResume);
