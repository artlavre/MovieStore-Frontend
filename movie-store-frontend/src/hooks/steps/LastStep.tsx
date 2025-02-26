type MovieData = {
    rating : number,
    language: string,
    movieCover: File | null,
}

type LastStepProps = MovieData & {
    updateFields: (fields: Partial<MovieData>) => void
}

export function LastStep({rating, language, movieCover, updateFields}: LastStepProps) {
    return (
        <div>
            <h1>Additional Info</h1>

            <label>Rating</label>
            <input
                type="number"
                required={true}
                value={rating}
                onChange={e => updateFields({rating: Number(e.target.value)})}
            />
            <label>Movie language</label>
            <input
                type="text"
                required={true}
                value={language}
                onChange={e => updateFields({language: e.target.value})}
            />
            <label>Movie cover</label>
            <input
                className="cover"
                type="file"
                accept="image/png, image/jpeg"
                onChange={e => updateFields({movieCover: e.target.files ? e.target.files[0] : null})}
            />
        </div>
    );
}