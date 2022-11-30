import MovieCard from "../MovieCard/MovieCard"

export default function MoviesListPage({ movies }) {
    return (
        <div>
            <h1>Movies List Page</h1>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.title}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    posterPath={movie.posterPath} />
            ))}

        </div>
    )
}