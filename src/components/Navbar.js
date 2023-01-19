import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goForward = () => {
        navigate(1);
    }

    return (
        <nav className="navbar">
            <h2>
                <Link to="/">Photo Album</Link>
            </h2>
            <div>
                <span onClick={goBack}><i className="fa-solid fa-circle-chevron-left"></i></span>
                <span onClick={goForward}><i className="fa-solid fa-circle-chevron-right"></i></span>
            </div>
        </nav>
    );
}

export default Navbar;