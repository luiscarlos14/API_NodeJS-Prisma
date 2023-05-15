import { CreateMovieRentController } from './../modules/movies/useCases/createMovieRent/CreateMovieRentController';
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { Router } from "express";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };
