import {Movie} from "../../types/Movie.ts";
import {makeAutoObservable} from "mobx";

class SearchMovieStore{
    movies: Movie[] = [];
    error: string = '';
    isLoading: boolean = false;
    state: "idle" | "pending" | "done" | "error" = "idle";

    constructor() {
        makeAutoObservable(this);
    }

    setMovies(movies: Movie[]) {
        this.movies = movies;
    }

    setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    setError(error: string) {
        this.error = error;
    }

}

const searchMovieStore = new SearchMovieStore();

export default searchMovieStore;