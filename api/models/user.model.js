import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-studios-cinematic-universe/e/e1/Widow2-avengers.jpg"
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema)

export default User