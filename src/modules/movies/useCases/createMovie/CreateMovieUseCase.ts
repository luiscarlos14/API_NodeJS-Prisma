import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

import { Movie } from "@prisma/client";

export class CreateMovieUseCase {
    async execute({ title, duration, realease_date, }: CreateMovieDTO): Promise<Movie> {
        const movieAlreadyExists = await prisma.movie.findUnique({
            where: {
                title,
            }
        });

        if (movieAlreadyExists) {
            throw new AppError("User already exists!");
        }

        const movie = await prisma.movie.create({
            data: {
                title,
                duration,
                realease_date
            }
        });


        return movie;

    }
}