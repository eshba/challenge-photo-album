import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>
                <Link to="/">Photo Album</Link>
            </h2>
            <Fragment>
                <Link to="">
                    <i className="fa-solid fa-magnifying-glass" />{' '}
                    Filter
                </Link>
            </Fragment>
        </nav>
    );
}

export default Navbar;