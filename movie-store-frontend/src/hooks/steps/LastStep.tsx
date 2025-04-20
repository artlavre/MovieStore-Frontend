import { observer } from "mobx-react-lite";

import addMovieStore from "../../stores/movies/addMovieStore.ts";

export const LastStep = observer(() => {
  const { movie } = addMovieStore;
  return (
    <div>
      <h1>Additional Info</h1>

      <label>Rating</label>
      <input
        type="number"
        required={true}
        value={movie.rating}
        onChange={(e) => addMovieStore.setMovieRating(Number(e.target.value))}
      />
      <label>Movie language</label>
      <input
        type="text"
        required={true}
        value={movie.language}
        onChange={(e) => addMovieStore.setMovieLanguage(e.target.value)}
      />
      <label>Movie cover</label>
      <input
        className="cover"
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => {
          const file = e.target.files?.[0] ?? null;
          addMovieStore.setMovieCover(file);
        }}
      />
    </div>
  );
});
