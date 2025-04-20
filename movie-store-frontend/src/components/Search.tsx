import { observer } from "mobx-react-lite";
import searchMovieStore from "../stores/movies/searchMovieStore.ts";

const Search = observer(() => {
  return (
    <div className="search">
      <div>
        <img src="/search.svg" />

        <input
          type="search"
          placeholder="Search within thousands movies"
          value={searchMovieStore.searchTerm}
          onChange={(e) => searchMovieStore.setSearchTerm((e.target.value))}
        />
      </div>
    </div>
  );
})

export default Search;
