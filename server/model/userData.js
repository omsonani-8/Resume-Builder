const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResumeSectionSchema = new Schema({
 basicInfo: {
    address: String,
    email: String,
    fullName: String,
    mobileNumber: String,
    profile: String,
    title: String,
 },
 education: [{
    degree: String,
    instituteName: String,
    location: String,
    percentageCGPA: String,
    startDate: String,
 }],
 workExperience: [{
    description: String,
    employer: String,
    jobTitle: String,
    startDate: String,
 }],
 skills: [String],
 achievements: String,
 projects: [{
    projectName: String,
    saveDes: [String],
 }],
 socialLinks: {
    type: Object,
    default: {},
 },
}); 



const User = mongoose.model('userData', ResumeSectionSchema);

module.exports = User;
