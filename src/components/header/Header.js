import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import logo from "./../../assets/mercadolibre-isologotipo.png"
import './Header.css';

export default function Header() {

    return (
        <div className="header" >
            <Router>
                 <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={logo} className="logo" alt="" />
                </Link>

                <h1 className="title" > Velez Shops </h1>
            </Router>

        </div >
    )

}
