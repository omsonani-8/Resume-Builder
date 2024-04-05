// controllers/userController.js

const User = require('../model/userData'); // Adjust the path as necessary

exports.createUser = async (req, res) => {
 try {
    const userData = new User(req.body);
    const savedUser = await userData.save();
    res.status(201).json(savedUser);
 } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error saving user data', error });
 }
};
