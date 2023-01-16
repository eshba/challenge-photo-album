import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { getPhotos, removePhoto } from "../actions/photo";
import PhotoItem from "./PhotoItem";

const PaginatedPhotos = ({ photosPerPage, photos }) => {
    const [photoItems, setPhotoItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + photosPerPage;
        setPhotoItems(photos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(photos.length / photosPerPage));
    }, [itemOffset, photosPerPage, photos])


    const handlePageClick = (event) => {
        const newOffset = event.selected * photosPerPage % photos.length;
        setItemOffset(newOffset);
    };

    return (
        <Fragment>
            <PhotoItem photos={photoItems} />
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

const Photos = ({ getPhotos, removePhoto, photo: { photos, photo }, album: { albums }, user: { users }}) => {
    const { id } = useParams();

    const [album, setAlbum] = useState(null);
    const [photosPerPage, setPhotosPerPage] = useState(20);

    useEffect(() => {
        getPhotos(id);
        setAlbum(albums.filter(album => album.id === parseInt(id))[0]);
    }, [getPhotos, id, albums]);
    
    return photos && album && (
        <Fragment>
            <section className="album">
                <h4 className="lead text-primary">{album.title}</h4>
                <h4 className="lead text-primary">{users.filter((user) => user.id === album.userId)[0].username}</h4>
                <p>show {" "}
                    <select name="items" onChange={e => setPhotosPerPage(e.target.value)} value={photosPerPage} >
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                    {" "}items per page
                </p>
                <PaginatedPhotos photosPerPage={photosPerPage} photos={photos} />
            </section>
            {photo && 
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => {removePhoto();}}>&times;</span>
                    <img src={`${photo.url}`} alt=""/>
                </div>
            </div>}
        </Fragment>
    );
}

Photos.propTypes = {
    getPhotos: PropTypes.func.isRequired,
    photo: PropTypes.object.isRequired,
    album: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    photo: state.photo,
    album: state.album,
    user: state.user
});

export default connect(mapStateToProps, { getPhotos, removePhoto })(Photos);