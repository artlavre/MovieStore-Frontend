import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { MovieInfo } from "../components/MovieInfo.tsx";
import Spinner from "../components/Spinner.tsx";
import moviePageStore from "../stores/movies/moviePageStore.ts";

export const MoviePage = () => {
  const { id } = useParams();

  useEffect(() => {
    moviePageStore.getMovie(String(id));
  }, [id]);

  return (
    <div className="movie-page-wrapper">
      {moviePageStore.state === "pending" ? (
        <Spinner />
      ) : moviePageStore.state === "error" ? (
        <p className="text-red-500">{moviePageStore.error}</p>
      ) : (
        <div className="movie-page">
          <div className="movie-card">
            <img src={moviePageStore.movie?.coverUrl} />
          </div>
          <MovieInfo />
        </div>
      )}
    </div>
  );
};
