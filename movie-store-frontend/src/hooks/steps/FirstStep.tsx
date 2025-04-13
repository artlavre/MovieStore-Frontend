import addMovieStore from "../../stores/movies/addMovieStore.ts";
import { observer } from "mobx-react-lite";

export const FirstStep = observer(() => {
  return (
    <div>
      <h1>Movie Description</h1>

      <label>Movie name</label>
      <input
        type="text"
        placeholder="Movie name"
        required
        value={addMovieStore.movie.title}
        onChange={(e) => addMovieStore.setMovieTitle(e.target.value)}
      />

      <label>Release Date</label>
      <input
        type="date"
        required
        value={addMovieStore.movie.releaseDate.toISOString().split("T")[0]}
        onChange={(e) => addMovieStore.setMovieDate(new Date(e.target.value))}
      />

      <label>Movie Description</label>
      <textarea
        className="description"
        placeholder="Description"
        required
        value={addMovieStore.movie.description}
        onChange={(e) => addMovieStore.setMovieDescription(e.target.value)}
      />
    </div>
  );
});
