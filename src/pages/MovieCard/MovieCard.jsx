import { Link } from "react-router-dom"

export default function MovieCard({ title, releaseDate, posterPath }) {
    return (
        <div className="movie-card">

            <Link to={`/movies/${title}`}>Title: {title}</Link>
            <p>Release Date: {releaseDate} </p>
            <img src={posterPath} />
        </div>

    )
}