import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadPhoto } from "../actions/photo";

const PhotoItem = ({ loadPhoto, photos }) => {
    return photos && (
        <div className="album-inner">
            {photos.map((photo) => (
                <div key={photo.id} className="album-item">
                    <div className="placeholder-thumb" onClick={() => {loadPhoto(photo);}}>
                        <img src={`${photo.thumbnailUrl}`} alt="" />
                    </div>
                    <div className="thumb-desc">
                        <p className="small text-primary underline">{photo.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

PhotoItem.propTypes = {
    loadPhoto: PropTypes.func.isRequired
}

export default connect(null, { loadPhoto })(PhotoItem);