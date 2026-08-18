import { createContext, useState, useEffect, useContext, use } from "react";

const movieContext = createContext();

export const useMovieContext = () => useContext(movieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs));
        }, [])


    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {
        setFavorites((prev) => [...prev, movie]);
    };

const removeFavorite = (movieId) => {
        setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));


    return <movieContext.Provider>
        {children}
    </movieContext.Provider>
}