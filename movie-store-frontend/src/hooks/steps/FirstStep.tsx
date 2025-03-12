import addMovieStore from "../../stores/movies/addMovieStore.tsx";
import {observer} from "mobx-react-lite";

export const FirstStep = observer(() => {
    const { movie } = addMovieStore;

    return (
        <div>
            <h1>Movie Description</h1>

            <label>Movie name</label>
            <input
                type="text"
                placeholder="Movie name"
                required
                value={movie.title}
                onChange={(e) => (movie.title = e.target.value)}
            />

            <label>Release Date</label>
            <input
                type="date"
                required
                value={movie.releaseDate.toISOString().split('T')[0]}
                onChange={(e) => (movie.releaseDate = new Date(e.target.value))}
            />

            <label>Movie Description</label>
            <textarea
                className="description"
                placeholder="Description"
                required
                value={movie.description}
                onChange={(e) => (movie.description = e.target.value)}
            />
        </div>
    );
});
