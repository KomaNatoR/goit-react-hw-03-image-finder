

export default function ImageGalleryItem({imgData}) {
    return (
        imgData.map(({id,webformatURL,tags }) => (
            <li key={id}>
                <img src={webformatURL} alt={tags} />
            </li>
        ))

    );
}