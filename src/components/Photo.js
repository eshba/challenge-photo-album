import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removePhoto } from "../actions/photo";


const Photo = ({ removePhoto, photo: { photo }, user , album }) => {
    return (
        <Fragment>
            {photo && 
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => {removePhoto();}}>&times;</span>
                    <div className="img_container">
                        <div className="placeholder_url"><img src={`${photo.url}`} alt=""/></div>
                        <div className="img_desc">
                            <h2 className="medium text-primary underline">{photo.title}</h2>
                            <p className="lead text-primary">{`Photo by: ${user}`}</p>
                            <p className="lead text-primary">{`Album: ${album}`}</p>
                        </div>
                    </div>
                </div>
            </div>}
        </Fragment>
    );
}

Photo.propTypes = {
    removePhoto: PropTypes.func.isRequired,
    photo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    photo: state.photo
});

export default connect(mapStateToProps, { removePhoto })(Photo);