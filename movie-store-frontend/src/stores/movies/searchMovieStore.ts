import { makeAutoObservable } from "mobx";

import { Movie } from "../../types/Movie.ts";
import { api } from "../../api/api.ts";

class SearchMovieStore {
  movies: Movie[] = [];
  searchTerm: string = "";
  error: string = "";
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

  setError(error: string) {
    this.error = error;
  }

  async searchMovies() {
    this.error = "";
    this.state = "pending"

    try {
      const endppoint = this.searchTerm
        ? `/movies?title=${encodeURIComponent(this.searchTerm)}`
        : "/movies";

      const response = await api.get(endppoint);

      if (response.status !== 200) {
        throw new Error("No movies found");
      }

      const data = response.data;

      console.log(data);

      searchMovieStore.setMovies(data || []);
      this.state = "done";
    } catch (error) {
      this.state = "error";
      this.error = "Error while fetching movies. Please try again later";
    }
  }
}

const searchMovieStore = new SearchMovieStore();

export default searchMovieStore;
