import React from 'react';
import {NavLink, Link} from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container">
        <Link className="navbar-brand" to="/">TITAN</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/"  activeClassName="active">Home </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/products"  activeClassName="active">Collection</NavLink>
                </li>
                <li className="nav-item"><NavLink  className="nav-link"  to="/cart" activeClassName="active"> cart</NavLink></li>
            </ul>
           </div>
          </div>
        </nav>
  );
}

export default Navbar;
