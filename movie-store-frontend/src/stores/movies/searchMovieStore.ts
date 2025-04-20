import { makeAutoObservable } from "mobx";

import { Movie } from "../../types/Movie.ts";

class SearchMovieStore {
  searchTerm: string = "";
  movies: Movie[] = [];
  error: string = "";
  isLoading: boolean = false;
  state: "idle" | "pending" | "done" | "error" = "idle";

  constructor() {
    makeAutoObservable(this);
  }

  setSearchTerm(term: string) {
    this.searchTerm = term;
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
