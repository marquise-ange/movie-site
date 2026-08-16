//when a state change occur the entire component reran or re-rendered, and the new state value is used to update the component's output.
import MovieCard from "../Components/MovieCard.jsx"
import { useState, useEffect } from "react" //hook 
import {searchMovies, getPopularMovies} from "../services/Api.js" //importing the functions from the Api.js file to use them in the Home component.
import "../css/Home.css" //importing the css file to style the Home component.
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]); //state variable to store the list of movies fetched from the API.
    const[error, setError] = useState(null) //state variable to store any error that occurs during the API call.
    const[loading, setLoading] = useState(true) //state variable to store the loading state of the API call.
    

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies(); //fetching the popular movies from the API using the getPopularMovies function.
                setMovies(popularMovies); //updating the movies state variable with the fetched popular movies.
            } catch (err) { 
                console.log (err);
                setError("Failed to fetch popular movies....") //updating the error state variable with the error message if the API call fails.;

            }
            finally {
                setLoading(false); //setting the loading state to false after the API call is completed.
            }
        }
        loadPopularMovies()

    }, []);


    const handleSearch = (e) => {
        e.preventDefault();// prevent the default behavior of the form submission, which is to reload the page so that it doesn't update the page when the form is submitted.
        alert(searchQuery)
        setSearchQuery("------")// clear the search input field after the form is submitted.
    };
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />

                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            <div className="movies-grid">
                {movies.map(
                    (movie) =>
                        movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                )}
            </div>
        </div>
    );
}
export default Home