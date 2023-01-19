import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import { getUsers } from "../actions/user";
import { getAlbums } from "../actions/album";
import AlbumItem from "./AlbumItem";
import Sidebar from "./Sidebar";


const PaginatedAlbums = ({ albumsPerPage, albums }) => {
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
            <AlbumItem albums={albumItems} />
            <div className="paginate">
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
            </div>
        </Fragment>
    );
}


const Albums = ({ getUsers, getAlbums, album: { albums } }) => {

    const [albumsPerPage, setAlbumsPerPage] = useState(20);

    useEffect(() => {
        getUsers();
        getAlbums();
    }, [getUsers, getAlbums]);

    return (
        <Fragment>
            <section className="album">
                <Sidebar flag="album" />
                <div className="container">
                    <div className="desc">
                        <h3 className="medium text-primary underline">Browse Albums</h3>
                    </div>
                    <div className="seg">
                        <p>show {" "}
                            <select name="items" onChange={e => setAlbumsPerPage(e.target.value)} value={albumsPerPage} >
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                            </select>
                            {" "}items per page
                        </p>
                    </div>
                    <PaginatedAlbums albumsPerPage={albumsPerPage} albums={albums} />
                </div>
            </section>
        </Fragment>
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