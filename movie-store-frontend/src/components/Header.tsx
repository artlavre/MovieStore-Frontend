import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h3 className="text-2xl font-bold tracking-wide text-white-400">
        🎬 MovieStore
      </h3>

      <nav className="space-x-4">
        <Link to="/">
          <button>Search</button>
        </Link>
        <Link to="/add">
          <button>Add Movie</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
