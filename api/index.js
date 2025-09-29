import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "../api/routes/user.route.js"
import authRouter from "../api/routes/auth.route.js"
import listingRouter from "../api/routes/listing.route.js"
import cookieParser from "cookie-parser"
import path from "path"

dotenv.config()

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB!")
    })
    .catch((error) => {
        console.log(error)
    })

const __dirname = path.resolve()

const app = express()

// Enable json could be received
app.use(express.json())

// Could get information from cookie
app.use(cookieParser())

app.listen(3000, () => {
    console.log("App is running on port 3000!!!")
})

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/listing", listingRouter)

app.use(express.static(path.join(__dirname, "/client/dist")))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

// Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})