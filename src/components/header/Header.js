import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../../assets/mercadolibre-isologotipo.png"
import './Header.css';

export default function Header() {

    return (
        <div className="header" >
            <Link to="/DAEVelezShops/home" style={{ textDecoration: 'none' }}>
                <img src={logo} className="logo" alt="" />
            </Link>
            <h1 className="title" > Velez Shops </h1>


        </div >
    )

}
