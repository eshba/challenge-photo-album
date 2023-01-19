import React from "react";

const NotFound = () => {
    return (
        <section className="not-found">
            <h1 className="x-large text-primary">
                <i className="fa-solid fa-triangle-exclamation"></i> Oops!
            </h1>
            <p className="large">Error: Page Not Found.</p>
        </section>
    )
}

export default NotFound;