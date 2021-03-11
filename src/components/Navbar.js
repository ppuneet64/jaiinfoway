import React from "react"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <NavLink activeClassName='link-active' to="/" className="w3-bar-item w3-button">
                    <b>BR</b> Architects
                    </NavLink>

                <div className="w3-right w3-hide-small">
                    <NavLink activeClassName='link-active' to="/projects" className="w3-bar-item w3-button">
                        Projects
                    </NavLink>
                    <NavLink activeClassName='link-active' to="/about" className="w3-bar-item w3-button">
                        About
                    </NavLink>
                    <NavLink activeClassName='link-active' to="/login" className="w3-bar-item w3-button">
                        Login
                    </NavLink>
                    <NavLink activeClassName='link-active' to="/register" className="w3-bar-item w3-button">
                        Register
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar