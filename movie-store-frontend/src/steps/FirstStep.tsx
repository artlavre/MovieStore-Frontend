type MovieData = {
    title: string,
    releaseDate: Date,
    description: string,
}

type FirstStepProps = MovieData & {
    updateFields: (fields: Partial<MovieData>) => void
}

export function FirstStep({title, releaseDate, description, updateFields}: FirstStepProps) {
    return (
        <div>
            <h1>Movie Description</h1>
            <label>Movie name</label>
            <input
                type="text"
                placeholder="Movie name"
                required={true}
                value={title}
                onChange={e => updateFields({title: e.target.value})}
            />
            <label>Release Date</label>
            <input
                type="date"
                required={true}
                value={releaseDate.toISOString().split('T')[0]}
                onChange={e => updateFields({releaseDate: new Date(e.target.value)})}
            />
            <label>Movie Description</label>
            <textarea
                className="description"
                placeholder="Description"
                required={true}
                value={description}
                onChange={e => updateFields({description: e.target.value})}
            />
        </div>
    );
}