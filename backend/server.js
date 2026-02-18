const express = require("express")
const cors = require("cors")
require("dotenv").config();

const connectDB = require('./config/db');
const authRoutes = require("./routes/authRoutes")
const { protect } = require("./middleware/authMiddleware");
const confessionRoutes = require("./routes/confessionRoutes")

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes)
app.use("/api/confession", confessionRoutes)

app.get("/test", (req,res)=>{
    res.send("Backend Working");
});

app.get("/api/protected",protect,(req,res)=>{
    res.json({
        message: "You accessed protected route",
        user: req.user
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Sinister address is: ${PORT}`)
});