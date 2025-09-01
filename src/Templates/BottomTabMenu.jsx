import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomTabMenu = () => {
    return (
        <nav className="navbar fixed-bottom border-top bg-dark text-white">
            <div className="container d-flex justify-content-around py-2">
                <NavLink className="nav-link text-center" to="/" aria-label="Home">
                    <i className="fa fa-home fa-lg" aria-hidden="true"></i>
                    <div className="small">Home</div>
                </NavLink>
                <NavLink className="nav-link text-center" to="/profile" aria-label="Profile">
                    <i className="fa fa-user fa-lg" aria-hidden="true"></i>
                    <div className="small">Profile</div>
                </NavLink>
                <NavLink className="nav-link text-center" to="/login" aria-label="Login">
                    <i className="fa fa-sign-in-alt fa-lg" aria-hidden="true"></i>
                    <div className="small">Login</div>
                </NavLink>
            </div>
        </nav>
    )
}
export default BottomTabMenu
