import React from 'react';
import { Link } from "react-router-dom";

import NavBarComponent from '../components/NavBarComponent';

export default function Search(){
    return(
        <div>
            <NavBarComponent />
            Olá página filme
            <Link to="/">Home</Link>
            <Link to="/movie">Busca</Link>
        </div>
    );
}