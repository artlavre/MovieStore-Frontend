import { observer } from "mobx-react-lite";

import addMovieStore from "../../stores/movies/addMovieStore.ts";

export const ActorsStep = observer(() => {
  return (
    <div>
      <h1>Actors</h1>

      <label>Name Actors</label>
      <input
        type="text"
        required={true}
        value={addMovieStore.movie.actors}
        placeholder="Name actor"
        onChange={(e) => addMovieStore.setMovieActors(e.target.value)}
      />
    </div>
  );
});
