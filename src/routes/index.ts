import movie from "./MovieRouter"
import express from "express"
import morganMiddlware from "../middleware/morganMiddleware"

export  const routes = (app: any) => {
    

    app.use(
        morganMiddlware,
        express.json(),
        movie
    )
}
