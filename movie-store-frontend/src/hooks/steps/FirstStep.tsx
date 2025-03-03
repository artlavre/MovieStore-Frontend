import addMovieStore from "../../stores/movies/addMovieStore.tsx";

type MovieData = {
    title: string,
    releaseDate: Date,
    description: string,
}

export function FirstStep({title, releaseDate, description}: MovieData) {
    return (
        <div>
            <h1>Movie Description</h1>
            <label>Movie name</label>
            <input
                type="text"
                placeholder="Movie name"
                required={true}
                value={title}
                onChange={e => addMovieStore.movie.title = e.target.value}
            />
            <label>Release Date</label>
            <input
                type="date"
                required={true}
                value={releaseDate.toISOString().split('T')[0]}
                onChange={e => addMovieStore.movie.releaseDate = new Date(e.target.value)}
            />
            <label>Movie Description</label>
            <textarea
                className="description"
                placeholder="Description"
                required={true}
                value={description}
                onChange={e => addMovieStore.movie.description = e.target.value}
            />
        </div>
    );
}