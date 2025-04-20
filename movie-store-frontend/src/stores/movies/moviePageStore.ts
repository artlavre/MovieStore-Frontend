import { makeAutoObservable } from "mobx";

import { GetMovieById } from "../../api/movieApi.ts";
import { Movie } from "../../types/Movie.ts";

class MoviePageStore {
  movie: Movie | null = null;
  state: "idle" | "pending" | "done" | "error" = "idle";
  error: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setMovie(movie: Movie) {
    this.movie = movie;
  }

  async getMovie(id: string) {
    this.state = "pending";

    try {
      const movie = await GetMovieById(id);
      this.movie = movie;
      this.state = "done";
    } catch (error) {
      console.log(error);
      this.state = "error";
      this.error = "Error while getting movie.";
    }
  }
}

const moviePageStore = new MoviePageStore();

export default moviePageStore;
