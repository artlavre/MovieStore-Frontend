import {makeAutoObservable} from "mobx";
import {AddMovieData} from "../../types/AddMovie.ts";
import {addMovieRequest} from "../../api/movieApi.ts";

class SearchMovieStore{
    movie: AddMovieData;
    state: "idle" | "pending" | "done" | "error" = "idle";

    constructor(){
        this.movie = {
            movieCover: null,
            title: "",
            rating: 0,
            actors: "",
            description: "",
            language: "",
            releaseDate: new Date(),
        };

        makeAutoObservable(this);
    }

    setMovieTitle(movieName:string){
        this.movie.title = movieName;
    }

    setMovieRating(movieRating:number){
        this.movie.rating = movieRating;
    }

    setMovieActors(actors:string){
        this.movie.actors = actors;
    }

    setMovieDescription(movieDescription:string){
        this.movie.description = movieDescription;
    }

    setMovieLanguage(language:string){
        this.movie.language = language;
    }

    setMovieDate(movieDate:Date){
        this.movie.releaseDate = movieDate;
    }

    setMovieCover(movieCover:File){
        this.movie.movieCover = movieCover;
    }

    async addMovie(){
        this.state = "pending";

        try{
            await addMovieRequest(this.movie);
            this.state = "done";
        }catch(e){
            this.state = "error";
            console.error(e);
        }
    }
}

const searchMovieStore = new SearchMovieStore();

export default searchMovieStore;