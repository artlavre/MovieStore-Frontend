import {MovieCardProps} from "../types/MovieCardProps.ts";

function MovieCard({movie : {title, rating, coverUrl, language, releaseDate}}: MovieCardProps){
    return (
        <div className="movie-card">
            <img src={coverUrl ? `${coverUrl}` : `/No-Poster.png`} alt="movie cover" />
            <div className="mt-4">
                <h3>{title}</h3>

                <div className="content">
                    <div className="rating">
                        <img src="Star.svg" alt="Star Icon" />
                        <p data-testid="rating" className="text-white">{rating ? rating.toFixed(1) : 'N/A' }</p>
                    </div>

                    <span>•</span>
                    <p className="text-white">{language ? language : "En"}</p>
                    <span>•</span>
                    <p className="text-white">{releaseDate ? new Date(releaseDate).getFullYear() : 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;