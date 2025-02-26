type MovieData = {
    actors: string,
}

type ActorsStep = MovieData & {
    updateFields: (fields: Partial<MovieData>) => void
}

export function ActorsStep({actors, updateFields}: ActorsStep) {
    return(
        <div>
            <h1>Actors</h1>

            <label>Name Actors</label>
            <input
                type="text"
                required={true}
                value={actors}
                placeholder="Name actor"
                onChange={e => updateFields({actors: e.target.value})}/>
        </div>
    );
}