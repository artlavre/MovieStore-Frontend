import { observer } from "mobx-react-lite";

import moviePageStore from "../stores/movies/moviePageStore.ts";
import { useNavigate } from "react-router-dom";

export const MovieInfo = observer(() => {
  const movie = moviePageStore.movie;
  const navigate = useNavigate();

  return (
    <div className="md:col-span-2 inline-block justify-items-start max-w-xl gap-4 text-xl">
      <h1 className="inline-block text-4xl font-bold">{movie?.title}</h1>

      <button
        onClick={() => navigate(-1)}
        className="absolute right-0 mr-30 px-4 py-2 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer text-white rounded-xl text-base transition-all"
      >
        ← Back
      </button>

      <div className="flex items-center gap-2 text-yellow-500">
          <span className="text-2xl">
            {movie?.rating ? movie.rating.toFixed(1) : "N/A"}
          </span>
        <img src="/Star.svg" alt="Star" className="w-6 h-6" />
      </div>

      <div>
        <span>Year of release:</span>{" "}
        {new Date(movie!.releaseDate).toLocaleDateString()}
      </div>

      <div>
        <span>Origin language:</span> {movie?.language}
      </div>

      <div className="flex">
        <span>Description:</span> {movie?.description}
      </div>
    </div>
  );
});
