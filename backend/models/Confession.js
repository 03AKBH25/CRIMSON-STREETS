const mongoose = require("mongoose");

const confessionSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        },

        category: {
            type: String,
            required: true
        },

        text: {
            type:String,
            required: true
        }
    },
    {timestamps:true}
)

module.exports = mongoose.model("Confession", confessionSchema)