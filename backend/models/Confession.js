const mongoose = require("mongoose");

const confessionSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        category: {
            type: String,
            required: true
        },
        mood:{
            type: String,
            required: true
        },

        text: {
            type:String,
            required: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {timestamps:true}
)

module.exports = mongoose.model("Confession", confessionSchema)