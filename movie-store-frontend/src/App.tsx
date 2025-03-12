import './App.css'
import SearchMoviesPage from "./pages/SearchMoviesPage.tsx";
import Header from "./components/Header.tsx";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.tsx";
import AddMoviePage from "./pages/AddMoviePage.tsx";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <ToastContainer />
            <Header />
            <Routes>
                <Route path="/" element={<SearchMoviesPage />}/>
                <Route path="/add" element={<AddMoviePage />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    );
}

export default App
