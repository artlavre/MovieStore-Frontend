import addMovieStore from "../../stores/movies/addMovieStore.tsx";

type MovieData = {
    rating : number,
    language: string
}

export function LastStep({rating, language}: MovieData) {
    return (
        <div>
            <h1>Additional Info</h1>

            <label>Rating</label>
            <input
                type="number"
                required={true}
                value={rating}
                onChange={e => addMovieStore.movie.rating = Number(e.target.value)}
            />
            <label>Movie language</label>
            <input
                type="text"
                required={true}
                value={language}
                onChange={e => addMovieStore.movie.language = e.target.value}
            />
            <label>Movie cover</label>
            <input
                className="cover"
                type="file"
                accept="image/png, image/jpeg"
                onChange={e =>addMovieStore.movie.movieCover = e.target.files ? e.target.files[0] : null}
            />
        </div>
    );
}