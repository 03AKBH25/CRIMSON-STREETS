const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Valley of Sinisters, Opened: ${conn.connection.host}`);
    } catch (error){
        console.error("Valley of Sinisters, access denied! ",error.message);
        process.exit(1);
    }
}

module.exports = connectDB