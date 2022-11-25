import { useParams } from "react-router-dom"


export default function MovieDetailPage({ movies }) {
    let { movieName } = useParams()
    let movie = movies.find(mov =>
        mov.title === movieName)

    return (
        <div>
            <h1>{movie.title}</h1>
            {movie.posterPath}
        </div>
    )
}