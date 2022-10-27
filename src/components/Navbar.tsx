import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
    <nav className="navbar">
        <ul className="navbar--list">
            <Link className="navbar--link" to="/posts">Feed</Link>
            <Link className="navbar--link" to="/">Posty</Link>
            <Link className="navbar--link" to="/">Użytkownicy</Link>
        </ul>
    </nav>
    )
}

export default Navbar