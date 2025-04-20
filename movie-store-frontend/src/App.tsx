import "./App.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header.tsx";
import AddMoviePage from "./pages/AddMoviePage.tsx";
import { MoviePage } from "./pages/MoviePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import SearchMoviesPage from "./pages/SearchMoviesPage.tsx";
import { registerServiceWorker } from "./serviceWorkerRegister.ts";

function App() {
  registerServiceWorker();

  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<SearchMoviesPage />} />
        <Route path="/:id" element={<MoviePage />} />
        <Route path="/add" element={<AddMoviePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
