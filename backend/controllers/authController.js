const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt= require("jsonwebtoken");
const {OAuth2Client} = require("google-auth-library")

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const registerUser = async(req,res) => {
    try{
        const { name, email, password } = req.body;
        const userExists = await User.findOne({email});
        
        if (userExists) {
            return res.status(400).json({message: "User already exists."});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create User
        const user = await User.create({
            name, email, password:hashedPassword
        });

        //Generate token
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET, 
            {expiresIn: "7d"}
        );

        res.status(201).json({
            message: "User registered successfully",
            token 
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const loginUser = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({message: "Invalid password"});
        }

        const token = jwt.sign(
            { id: user._id},
            process.env.JWT_SECRET,
            { expiresIn: "7d"}
        )
        res.json({
            message: "Login successful",
            token 
        });
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

const googleLogin = async (req,res) => {
    try{
        const {token} =req.body;

        //Verify token with Google
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload()

        const { sub, email, name } = payload

        // Check if user exists
        let user = await User.findOne({ email })

        if (!user) {
            user = await User.create({
                name, 
                email,
                googleId: sub
            })
        }

        //Generate your own JWT
        const jwtToken = jwt.sign(
            { id: user._id},
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.json({
            message: "Google login successful",
            token: jwtToken
        })
    } catch (error){
        res.status(401).json({message: "Google authentication failed"})
    }
}

module.exports = {registerUser, loginUser, googleLogin};
