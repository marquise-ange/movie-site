//when a state change occur the entire component reran or re-rendered, and the new state value is used to update the component's output.
import MovieCard from "../Components/MovieCard"
import { useState } from "react" //hook 
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        { id: 1, title: "John Wick", release_Date: "2020" },
        { id: 2, title: "Terminator", release_Date: "2023" },
        { id: 3, title: "superman", release_Date: "2014" },
    ];


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