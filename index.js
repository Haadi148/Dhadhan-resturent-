import express from "express";
import ConnectToDb from "./config/dp.js";
import UserRouter from "./routes/UserRouter.js";
import Food_router from "./routes/Food_router.js";
import dotenv from "dotenv";

dotenv.config()
const app = express()
ConnectToDb()

const port = 6000


app.use(express.json())
app.use('/api/user/',UserRouter)
app.use('/api/food',Food_router)

app.listen(port,()=>
{
    console.log(`server is running on port ${port}`)
})
