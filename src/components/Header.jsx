import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header className="main-header">
            <h1>FRUITful</h1>
            <h2></h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/find-fruit-trees">Find Fruit Trees</Link>
            </nav>
        </header>
    )
}