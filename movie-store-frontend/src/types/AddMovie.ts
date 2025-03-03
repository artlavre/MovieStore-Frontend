export interface AddMovieData {
    movieCover: File | null;
    title : string;
    description : string;
    language : string;
    rating : number;
    actors : string;
    releaseDate : Date;
}