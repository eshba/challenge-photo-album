import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../actions/user";
import { getAlbums } from "../actions/album";
import ReactPaginate from "react-paginate";

import green from "../images/green.png";
import yellow from "../images/yellow.png";
import blue from "../images/blue.png";
import red from "../images/red.png";
import white from "../images/white.png";


const AlbumItems = ({ albums, users }) => {

    const albumCover = [green,yellow,blue,red,white,green,yellow,blue,red,white];

    return (
        <div className="album_inner">
            {albums && users && albums.map((album) => (
                <div key={album.id} className="album_item">
                    <div className="img_placeholder">
                        <Link to={`/albums/${album.id}`}>
                        <img src={albumCover[album.userId-1]} alt="" />
                        </Link> 
                    </div>
                    <p className="medium text-primary">{album.title}</p>
                    <p className="medium text-primary">{users.filter((user) => user.id === album.userId)[0].username}</p>
                </div>
            ))}
        </div>
    );
}


const PaginatedAlbums = ({ albumsPerPage, albums, users }) => {
    const [albumItems, setAlbumItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + albumsPerPage;
        setAlbumItems(albums.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(albums.length / albumsPerPage));
    }, [itemOffset, albumsPerPage, albums])


    const handlePageClick = (event) => {
        const newOffset = event.selected * albumsPerPage % albums.length;
        setItemOffset(newOffset);
    };

    return (
        <Fragment>
            <AlbumItems albums={albumItems} users={users} />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </Fragment>
    );
}


const Albums = ({ getUsers, getAlbums, user: { users }, album: { albums } }) => {

    const [albumsPerPage, setAlbumsPerPage] = useState(20);

    useEffect(() => {
        getUsers();
        getAlbums();
    }, [getUsers, getAlbums]);

    return (
        <section className="album">
            <h5 className="lead text-primary">Album list</h5>
            <p>show {" "}
                <select name="items" onChange={e => setAlbumsPerPage(e.target.value)} value={albumsPerPage} >
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                </select>
                {" "}items per page
            </p>
            <PaginatedAlbums albumsPerPage={albumsPerPage} albums={albums} users={users} />
        </section>
    );
}

Albums.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    album: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user,
    album: state.album
});

export default connect(mapStateToProps, { getUsers, getAlbums })(Albums);