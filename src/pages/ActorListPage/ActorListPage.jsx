import ActorCard from "../ActorCard/ActorCard"

export default function ActorListPage({ movies }) {
    let actorsSet = new Set()
    movies.map(movie => {
        movie.cast.map(actor => {
            actorsSet.add(actor)
        })
    })

    let actorsArray = Array.from(actorsSet)
    return (
        <div>
            <h1>Actor List Page</h1>
            {actorsArray.map((actor) => (
                <ActorCard
                    actor={actor} />
            ))}
        </div>
    )
}