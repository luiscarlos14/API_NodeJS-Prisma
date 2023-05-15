import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

export class CreateMovieController {
    async handle(req: Request, res: Response) {
        const { title, duration, realease_date } = req.body;

        const createMovieUseCase = new CreateMovieUseCase();

        const result = await createMovieUseCase.execute({ title, duration, realease_date });

        return res.status(201).json(result);
    }
}