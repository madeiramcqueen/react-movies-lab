import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <nav>
            <Link>Movies Page</Link>
            &nbsp; | &nbsp;
            <Link>Actors Page</Link>
        </nav>
    )
}