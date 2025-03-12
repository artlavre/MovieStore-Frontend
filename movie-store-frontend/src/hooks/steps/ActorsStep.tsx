import addMovieStore from "../../stores/movies/addMovieStore.tsx";
import {observer} from "mobx-react-lite";

export const ActorsStep = observer(() => {
    const {movie} = addMovieStore;

    return(
        <div>
            <h1>Actors</h1>

            <label>Name Actors</label>
            <input
                type="text"
                required={true}
                value={movie.actors}
                placeholder="Name actor"
                onChange={e => addMovieStore.movie.actors = e.target.value}/>
        </div>
    );
})