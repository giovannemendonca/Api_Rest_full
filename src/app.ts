require("dotenv").config()
import express from "express";
import  config  from "config";
import logger from "../config/logger";
import db from "../config/db"
import { routes } from "./routes/index";


const app = express();
const port  =config.get<number>("port")
routes(app)


app.listen(port, async() => {
    await db()

    logger.info(`Aplicação está rodando na porta: ${port}`);
    
})
