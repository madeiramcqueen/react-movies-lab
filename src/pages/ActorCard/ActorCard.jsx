

export default function ActorCard({ actor, index }) {
    return (
        <>
            <p>{actor}</p>
            {/* <div style={{
                backgroundImage: `url(https://picsum.photos/id/${index}/200/100)`
            }} > </div> */}
            <img src={`https://picsum.photos/id/${index + 1}/200/100`} alt="image"></img>
        </>
    )
}