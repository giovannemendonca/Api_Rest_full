import { Router, Request, Response } from "express";
import {
  createMovie,
  findMovieById,
  getAllMovie,
  removeMovie,
  updateMovie,
} from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router
  .get("/movie", getAllMovie)
  .get("/movie/:id", findMovieById)
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .delete("/movie/:id", removeMovie)
  .patch("/movie/:id",movieCreateValidation(), validate, updateMovie)