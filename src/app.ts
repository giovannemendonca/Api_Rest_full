require("dotenv").config()
import express, { Router } from "express";
import  config  from "config";
import router from "./routes";
import logger from "../config/logger";
import morganMiddlware from "./middleware/morganMiddleware";
import db from "../config/db"


const app = express()

// JSON middleware
app.use(express.json())

app.use(morganMiddlware)

app.use("/api/", router)

// app port
const port  =config.get<number>("port")


app.listen(port, async() => {
    await db()

    logger.info(`Aplicação está rodando na porta: ${port}`);
    
})
