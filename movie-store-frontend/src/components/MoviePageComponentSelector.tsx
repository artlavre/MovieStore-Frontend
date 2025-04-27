import { observer } from "mobx-react-lite";
import moviePageStore from "../stores/movies/moviePageStore.ts";
import Spinner from "./Spinner.tsx";
import { MovieInfo } from "./MovieInfo.tsx";

export const MoviePageComponentSelector = observer(() => {
  if(moviePageStore.state === "pending"){
    return(<Spinner />)
  }
  if(moviePageStore.state === "error"){
    return(<p className="text-red-500">{moviePageStore.error}</p>);
  }
  return(
    <div className="movie-page">
      <div className="movie-card">
        <img src={moviePageStore.movie?.coverUrl} />
      </div>
      <MovieInfo />
    </div>
  )
});