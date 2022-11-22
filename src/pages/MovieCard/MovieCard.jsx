

export default function MovieCard({ title, releaseDate, posterPath }) {
    return (
        <div className="movie-card">

            <p>Title: {title} </p>
            <p>Release Date: {releaseDate} </p>
            <p>Poster Path: <img src={posterPath} /> </p>

        </div>

    )
}