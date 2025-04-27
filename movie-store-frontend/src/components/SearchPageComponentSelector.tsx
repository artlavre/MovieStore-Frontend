import searchMovieStore from "../stores/movies/searchMovieStore.ts";
import Spinner from "./Spinner.tsx";
import MovieCard from "./MovieCard.tsx";
import { observer } from "mobx-react-lite";

export const SearchPageComponentSelector = observer(() => {
  if(searchMovieStore.state === "pending"){
    return(<Spinner />);
  }
  if(searchMovieStore.state === "error"){
    return(<p className="text-red-500">{searchMovieStore.error}</p>);
  }
  return (
    <ul>
      {searchMovieStore.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
});