import { useEffect } from "react";

import { observer } from "mobx-react-lite";

import { api } from "../api/api.ts";
import MovieCard from "../components/MovieCard.tsx";
import Search from "../components/Search.tsx";
import Spinner from "../components/Spinner.tsx";
import searchMovieStore from "../stores/movies/searchMovieStore.ts";
import { SearchPageComponentSelector } from "../components/SearchPageComponentSelector.tsx";

const SearchMoviesPage = observer(() => {
  useEffect(() => {
    searchMovieStore.searchMovies();
  }, [searchMovieStore.searchTerm]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <section className="greating">
          <img src="/hero-img.png" alt="Hero" />
          <h1>
            <span className="text-gradient">Find</span> or{" "}
            <span className="text-gradient">Add</span> Movies
          </h1>

          <Search />
        </section>

        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>
          <SearchPageComponentSelector />
        </section>
      </div>
    </main>
  );
});

export default SearchMoviesPage;
