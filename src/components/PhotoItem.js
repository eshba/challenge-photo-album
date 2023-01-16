import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadPhoto } from "../actions/photo";

const PhotoItem = ({ loadPhoto, photos }) => {
    return (
        <div className="album_inner">
            {photos && photos.map((photo) => (
                <div key={photo.id} className="album_item">
                    <div className="img_placeholder" onClick={() => {loadPhoto(photo);}}>
                        <img src={`${photo.thumbnailUrl}`} alt="" />
                    </div>
                    <p className="medium text-primary">{photo.title}</p>
                </div>
            ))}
        </div>
    );
}

PhotoItem.propTypes = {
    loadPhoto: PropTypes.func.isRequired
}

export default connect(null, { loadPhoto })(PhotoItem);