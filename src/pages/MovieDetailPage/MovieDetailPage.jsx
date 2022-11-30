import { useParams } from "react-router-dom"


export default function MovieDetailPage({ movies }) {
    let { movieName } = useParams()
    let movie = movies.find(mov =>
        mov.title === movieName)

    return (
        <div>
            <h1>Movie: {movie.title}</h1>
            <h2>Release Date: {movie.releaseDate}</h2>
            <h2>Cast Members:</h2>
            <ul>
                {movie.cast.map(actor => {
                    return <li key={actor}>{actor}</li>
                })
                }
            </ul>
            <img src={movie.posterPath} alt="movie-images" />
        </div>
    )
}