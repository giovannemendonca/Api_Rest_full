import { Router } from "express";
import MovieControle from "../controllers/movieControllers";
import { validate } from "../middleware/handleValidation";
import { movieCreateValidation } from "../middleware/movieValidation";


const router = Router();


router
    .get("/movie", MovieControle.getAllMovie)
    .get("/movie/:id", MovieControle.findMovieById)
    .post("/movie", movieCreateValidation(), validate, MovieControle.createMovie)
    .patch("/movie/:id", movieCreateValidation(), validate, MovieControle.updateMovie)
    .delete("/movie/:id", MovieControle.removeMovie)

export default router;
