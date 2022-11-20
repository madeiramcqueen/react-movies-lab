import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <nav>
            <Link to="/">Movies Page</Link>
            &nbsp; | &nbsp;
            <Link to="/actors">Actors Page</Link>
        </nav>
    )
}