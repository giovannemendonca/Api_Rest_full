import { Request, Response } from "express";
import { MovieModel } from "../models/Movies";
import logger from "../../config/logger";

class MovieControle{
    static async  createMovie(req: Request, res: Response) {
        try {
            const data = req.body;
            const movie = await MovieModel.create(data)
            return res.status(201).json(movie)
        } catch (error: any) {
            logger.error(`Erro no sistema: ${error.message}`)
        }
    }
    
    static async  findMovieById(req: Request, res:Response){
        
        try {
            const id = req.params.id;
            const movie = await MovieModel.findById(id);
            if(!movie){
                console.log("aqui")
                return res.status(404).json({error: "O filme não existe"})
            }
            return res.status(200).json(movie)
    
        } catch (error: any) {
            logger.error(`Erro no sistema: ${error.message}`)
        }
    }
    
    static async  getAllMovie(req:Request, res:Response){
        try {
            const movie = await MovieModel.find();
            return res.status(200).json(movie);
        } catch (error: any) {
            logger.error(`Erro no sistema: ${error.message}`)
        }
    }
    
    static async  removeMovie(req: Request, res: Response){
        try {
            const {id} = req.params;
            
            const movie = await MovieModel.findById(id)
            if(!movie){
                return res.status(200).json({error: "O filme não existe"})
            }
            await movie.delete()
            return res.status(200).json({message: "Filme Removido com sucesso"})
    
        } catch (error: any) {
            logger.error(`Erro no sistema: ${error.message}`)
            return res.status(500).json({erro : "Por favor, tente mais tarde"})
        }
    }
    
    static async  updateMovie(req: Request, res:Response) {
        try {
            const {id} = req.params;
            const data = req.body;
    
            const movie = await MovieModel.findById(id)
            if(!movie){
                return res.status(200).json({error: "O filme não existe"})
            }
            
            await MovieModel.update({_id: id}, data)
            return res.status(200).json({message: "Filme atualizado com sucesso"})
    
        } catch (error: any) {
            logger.error(`Erro no sistema: ${error.message}`)
            return res.status(500).json({erro : "Por favor, tente mais tarde"})
        }
    }
}

export default MovieControle;