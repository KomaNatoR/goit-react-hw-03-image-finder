import PropTypes from 'prop-types';

export default function ImageGalleryItem({imgData,takeImgId}) {
    return (
        imgData.map(({ id, webformatURL, tags }) => (
            <li key={id} onClick={()=>takeImgId(id)} >
                <img src={webformatURL} alt={tags} />
            </li>
        ))
    );
};
ImageGalleryItem.propTypes = {
    renderData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags:PropTypes.string.isRequired,
    }),),
    takeImgId: PropTypes.func.isRequired,
};
ImageGalleryItem.defaultProps = {
    imgData:[]
};