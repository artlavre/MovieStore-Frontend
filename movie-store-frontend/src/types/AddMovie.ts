export interface AddMovieData {
    movieCover: File | null | undefined;
    title : string;
    description : string;
    language : string;
    rating : number;
    actors : string;
    releaseDate : Date;
}