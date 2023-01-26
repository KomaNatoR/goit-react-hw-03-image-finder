

export default function ImageGalleryItem({imgData,takeImgId}) {
    return (
        imgData.map(({ id, webformatURL, tags }) => (
            <li key={id} onClick={()=>takeImgId(id)} >
                <img src={webformatURL} alt={tags} />
            </li>
        ))
    );
}