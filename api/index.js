import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "../api/routes/user.route.js"
import authRouter from "../api/routes/auth.route.js"

dotenv.config()

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB!")
    })
    .catch((error) => {
        console.log(error)
    })

const app = express()

// Enable json could be received
app.use(express.json())

app.listen(3000, () => {
    console.log("App is running on port 3000!!!")
})

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)