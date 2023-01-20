import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({user: { loading } }) => {

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
            {!loading && <div>
                <span onClick={goBack}><i className="fa-solid fa-circle-chevron-left"></i></span>
                <span onClick={goForward}><i className="fa-solid fa-circle-chevron-right"></i></span>
            </div>}
        </nav>
    );
}

Navbar.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(Navbar);