import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
    async execute({ movieID, userID }: CreateMovieRentDTO): Promise<void> {
        const movieExists = await prisma.movie.findUnique({
            where: {
                id: movieID,
            }
        });

        if (!movieExists) {
            throw new AppError("Movie does not exist");
        }
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where: {
                movieID
            }
        });

        if (movieAlreadyRented) {
            throw new AppError("Movie already rented");
        }

        const userExists = await prisma.user.findUnique({
            where: {
                id: userID
            }
        });

        if (!userExists) {
            throw new AppError("User does not exist");
        }

        await prisma.movieRent.create({
            data: {
                movieID,
                userID,
            }
        });
    }
}