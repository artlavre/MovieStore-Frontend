import { useNavigate } from "react-router-dom";

import moviePageStore from "../stores/movies/moviePageStore.ts";
import { MovieCardProps } from "../types/MovieCardProps.ts";

function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();

  const handleMoviePage = (id: string) => {
    moviePageStore.setMovie(movie);
    navigate("/" + id);
  };

  return (
    <div className="movie-card" onClick={() => handleMoviePage(movie.id)}>
      <img
        src={movie.coverUrl ? `${movie.coverUrl}` : "/No-Poster.png"}
        alt="movie cover"
      />
      <div className="mt-4">
        <h3>{movie.title}</h3>

        <div className="content">
          <div className="rating">
            <img src="../../public/Star.svg" alt="Star Icon" />
            <p data-testid="rating" className="text-white">
              {movie.rating ? movie.rating.toFixed(1) : "N/A"}
            </p>
          </div>

          <span>•</span>
          <p className="text-white">{movie.language ? movie.language : "En"}</p>
          <span>•</span>
          <p className="text-white">
            {movie.releaseDate
              ? new Date(movie.releaseDate).getFullYear()
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
