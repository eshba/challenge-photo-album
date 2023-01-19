import React from "react";
import { connect } from "react-redux";

const Sidebar = ({ flag }) => {

    const album = <h4 className="large text-primary"><i className="fa-regular fa-images"></i>{' '}Album's List</h4>;

    const photo = <h4 className="large text-primary"><i class="fa-solid fa-camera-retro"></i>{' '}Photo's List</h4>;

    return (
        <div className="sidebar">{flag === "album" ? album : photo}</div>
    );
}

export default connect()(Sidebar);