import '../css/Favorites.css'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../Components/MovieCard'

function Favorites() {
    const { favorites } = useMovieContext()

    if (favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>

                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard
                            movie={movie}
                            key={movie.id}
                        />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="favorites-empty">
            <h2>No favorite movies yet.</h2>

            <p>
                Click the heart icon on a movie to add it to your favorites.
            </p>
        </div>
    )
}

export default Favorites