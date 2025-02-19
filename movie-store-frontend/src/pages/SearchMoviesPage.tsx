import {useEffect, useState} from "react";
import Search from "../components/Search.tsx";
import Spinner from "../components/Spinner.tsx";
import MovieCard from "../components/MovieCard.tsx";
import { Movie } from "../types/Movie.ts";

const API_BASE_URL = "https://localhost:44343/api";

const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
    }
};

function SearchMoviesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setLoading] = useState(false);
    const fetchMovies = async (query = '') => {
        setLoading(true);
        setErrorMessage('');

        try{
            const endppoint = query
                ? `${API_BASE_URL}/movies?title=${encodeURIComponent(query)}`
                : `${API_BASE_URL}/movies`;

            const response = await fetch(endppoint, API_OPTIONS);

            if(!response.ok){
                throw new Error("No movies found");
            }

            var data = await response.json();

            console.log(data);

            if(data.Response === "False"){
                setErrorMessage("Something went wrong");
                setMovies([]);
                return;
            }

            setMovies(data || []);
        } catch(error){
            console.log(`Error fetching movies: ${error}`);

            setErrorMessage('Error while fetching movies. Please try again later');
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies(searchTerm);
    }, [searchTerm]);

    return (
        <main>
            <div className="pattern"/>

            <div className="wrapper">
                <section className="greating">
                    <img src="./hero-img.png" alt="Hero"/>
                    <h1><span className="text-gradient">Find</span> or <span className="text-gradient">Add</span> Movies</h1>

                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </section>

                <section className="all-movies">
                    <h2 className="mt-[40px]">All Movies</h2>

                    {isLoading ? (
                        <Spinner />
                    ) : errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ) :(
                        <ul>
                            {movies.map(movie => (
                                <MovieCard key={movie.id} movie={movie}/>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </main>
    );
}

export default SearchMoviesPage;