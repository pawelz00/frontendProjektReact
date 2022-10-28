import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
    <nav className="navbar">
        <ul className="navbar--list">
            <Link className="navbar--link" to="/feed">Feed</Link>
            <Link className="navbar--link" to="/posts">Posty</Link>
            <Link className="navbar--link" to="/users">Użytkownicy</Link>
        </ul>
    </nav>
    )
}

export default Navbar