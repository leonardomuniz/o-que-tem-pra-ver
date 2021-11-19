import * as React from 'react';
import { Link } from "react-router-dom";


export default function NavBarComponent() {

    return (
        <nav className="navbar">
            <Link to="/" className="logo">Home</Link>
            <ul className="nav-links">
                <li><Link to="/search" >Pesquisa avançada</Link></li>
            </ul>
        </nav>
    );
}


