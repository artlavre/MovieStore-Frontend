import addMovieStore from "../../stores/movies/addMovieStore.tsx";
import {observer} from "mobx-react-lite";

type MovieData = {
    rating : number,
    language: string
}

export const LastStep = observer(() => {
    const {movie} = addMovieStore;
    return (
        <div>
            <h1>Additional Info</h1>

            <label>Rating</label>
            <input
                type="number"
                required={true}
                value={movie.rating}
                onChange={e => addMovieStore.movie.rating = Number(e.target.value)}
            />
            <label>Movie language</label>
            <input
                type="text"
                required={true}
                value={movie.language}
                onChange={e => addMovieStore.movie.language = e.target.value}
            />
            <label>Movie cover</label>
            <input
                className="cover"
                type="file"
                accept="image/png, image/jpeg"
                onChange={e => addMovieStore.movie.movieCover = e.target.files ? e.target.files[0] : null}
            />
        </div>
    );
})