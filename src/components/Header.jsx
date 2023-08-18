import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header className="main-header">
            <h1>fruit(ful)</h1>
            <nav>
                <Link className="link" to="/">About</Link>
                <Link className="link" to="/find-fruit-trees">Find Fruit Trees</Link>
                <Link className="link" to="/my-trees">My Trees</Link>
            </nav>
        </header>
    )
}