import React from "react";
import { Link } from "react-router-dom"; 

const Landing = () => {
    return (
        <section className="landing">
            <div className="landing-inner">
                <h1 className="x-large">Photo Album</h1>
                <p className="lead"><Link to="/albums">Click here</Link> to browse through the Albums.</p>
            </div>
        </section>
    );
}

export default Landing;