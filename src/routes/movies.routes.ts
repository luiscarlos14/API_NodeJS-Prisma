import { GetMoviesByReleaseDateController } from './../modules/movies/useCases/getMoviesByReleaseDate/getMoviesByReleaseDateController';
import { CreateMovieRentController } from './../modules/movies/useCases/createMovieRent/CreateMovieRentController';
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { Router } from "express";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/releases", getMoviesByReleaseDateController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };
