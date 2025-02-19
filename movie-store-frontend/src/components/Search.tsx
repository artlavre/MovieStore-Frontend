interface SearchProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

function Search({searchTerm, setSearchTerm}: SearchProps) {
    return (
        <div className="search">
            <div>
                <img src="search.svg"/>

                <input
                    type="search"
                    placeholder="Search within thousands movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Search;