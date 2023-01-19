import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AlbumItem = ({ albums, user: { users} }) => {

    const albumCover = ["00FF00","FFFF00","0000FF","FF0000","8F00FF","00FF00","FFFF00","0000FF","FF0000","8F00FF"];

    return albums && users && (
        <div className="album-inner">
            {albums.map((album) => (
                <div key={album.id} className="album-item">
                    <div className="placeholder-thumb">
                        <Link to={`/albums/${album.id}`}>
                            <img src={`https://via.placeholder.com/150/${albumCover[album.userId-1]}`} alt="" />
                        </Link> 
                    </div>
                    <div className="thumb-desc">
                        <p className="small text-primary underline">{album.title}</p>
                        <p className="small text-primary">{users.filter((user) => user.id === album.userId)[0].username}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

AlbumItem.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(AlbumItem);