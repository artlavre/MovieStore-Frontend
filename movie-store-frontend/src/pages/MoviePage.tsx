import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { MovieInfo } from "../components/MovieInfo.tsx";
import Spinner from "../components/Spinner.tsx";
import moviePageStore from "../stores/movies/moviePageStore.ts";
import { MoviePageComponentSelector } from "../components/MoviePageComponentSelector.tsx";

export const MoviePage = () => {
  const { id } = useParams();

  useEffect(() => {
    moviePageStore.getMovie(String(id));
  }, [id]);

  return (
    <div className="movie-page-wrapper">
      <MoviePageComponentSelector />
    </div>
  );
};
