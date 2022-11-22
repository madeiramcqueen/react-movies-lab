

export default function MovieCard({ title, releaseDate }) {
    return (
        <div className="movie-card">
            <h3>Movie Titles and Release Dates:</h3>
            <p>Title: {title}</p>
            <p>Release Date: {releaseDate}</p>

        </div>

    )
}