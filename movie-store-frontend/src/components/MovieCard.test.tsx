import MovieCard from "./MovieCard";
import {render} from "@testing-library/react";
import {Movie} from "../types/Movie.ts";

const baseMovie: Movie = {
    id: '1',
    title: 'Inception',
    rating: 8.8,
    language: 'English',
    releaseDate: '2010-07-16',
    coverUrl: ""
};

describe("MovieCard", () => {
    it("displays the rating", () =>{
        const { getByTestId } = render(<MovieCard movie={baseMovie} />);
        const raying = Number(getByTestId("rating").textContent);

        expect(raying).toEqual(8.8);

    })
})

