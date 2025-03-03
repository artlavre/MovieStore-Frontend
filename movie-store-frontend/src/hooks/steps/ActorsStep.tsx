import addMovieStore from "../../stores/movies/addMovieStore.tsx";

type MovieData = {
    actors: string,
}

export function ActorsStep({actors}: MovieData) {
    return(
        <div>
            <h1>Actors</h1>

            <label>Name Actors</label>
            <input
                type="text"
                required={true}
                value={actors}
                placeholder="Name actor"
                onChange={e => addMovieStore.movie.actors = e.target.value}/>
        </div>
    );
}