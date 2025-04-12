import {useEffect, useState} from "react";
import Search from "../components/Search.tsx";
import Spinner from "../components/Spinner.tsx";
import MovieCard from "../components/MovieCard.tsx";
import searchMovieStore from "../stores/movies/searchMovieStore.ts";
import {observer} from "mobx-react-lite";
import {api} from "../api/api.ts";

const SearchMoviesPage = observer(() => {
    const [searchTerm, setSearchTerm] = useState("");

    const fetchMovies = async (query = '') => {
        searchMovieStore.setIsLoading(true);
        searchMovieStore.setError('');

        try{
            const endppoint = query
                ? `/movies?title=${encodeURIComponent(query)}`
                : `/movies`;

            const response = await api.get(endppoint);

            if(response.status !== 200){
                throw new Error("No movies found");
            }

            var data = response.data;

            console.log(data);

            if(data.Response === "False"){
                searchMovieStore.setError("Something went wrong");
                searchMovieStore.setMovies([]);
                return;
            }

            searchMovieStore.setMovies(data || []);
        } catch(error){
            searchMovieStore.setError('Error while fetching movies. Please try again later');
        }finally {
            searchMovieStore.setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies(searchTerm);
    }, [searchTerm]);

    return (
        <main>
            <div className="pattern" />

            <div className="wrapper">
                <section className="greating">
                    <img src="/hero-img.png" alt="Hero" />
                    <h1><span className="text-gradient">Find</span> or <span className="text-gradient">Add</span> Movies</h1>

                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </section>

                <section className="all-movies">
                    <h2 className="mt-[40px]">All Movies</h2>

                    {searchMovieStore.isLoading ? (
                        <Spinner />
                    ) : searchMovieStore.error ? (
                        <p className="text-red-500">{searchMovieStore.error}</p>
                    ) :(
                        <ul>
                            {searchMovieStore.movies.map(movie => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </main>
    );
});

export default SearchMoviesPage;