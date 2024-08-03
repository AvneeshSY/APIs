const bcrypt = require("bcryptjs");
const signupDetails = require("../model/signupModel");

async function signupController(req, res) {
    try {
        const { Name, phoneNumber, Email, Address, Password, confirmPassword } = req.body;

        // Input validations
        if (!Name) {
            throw new Error("Please enter your Name.");
        }
        if (!phoneNumber) {
            throw new Error("Please enter your phone number.");
        }
        if (!Address) {
            throw new Error("Please enter your Address.");
        }
        if (!Email) {
            throw new Error("Please enter your Email.");
        }
        if (!Password) {
            throw new Error("Please enter your Password.");
        }
        if (!confirmPassword) {
            throw new Error("Please re-enter your Password.");
        }

        // Check if passwords match
        if (Password !== confirmPassword) {
            throw new Error("Passwords do not match.");
        }

        // Check if user already exists
        const user = await signupDetails.findOne({ Email });
        if (user) {
            throw new Error("A user already exists with this Email.");
        }

        // Password hashing
        const salt = bcrypt.genSaltSync(10); // Correct method name
        const hashPassword = bcrypt.hashSync(Password, salt);
        if (!hashPassword) {
            throw new Error("Password hashing failed.");
        }

        // Create user payload and save to database
        const payload = {
            Name,
            phoneNumber,
            Email,
            Address,
            Password: hashPassword,
            
            role: "GENERAL" // Added role
        };

        const newUser = new signupDetails(payload);
        const savedUser = await newUser.save();

        res.status(201).json({
            data: savedUser,
            success: true,
            error: false,
            message: "User created successfully."
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = signupController;
