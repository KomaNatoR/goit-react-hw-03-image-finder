import ImageGalleryItem from "./ImageGalleryItem";
import { Ul } from "./imageGallery.styled";


export default function ImageGallery({imgData,takeImgId}) {
    return (
        <Ul>
            <ImageGalleryItem imgData={imgData} takeImgId={takeImgId} />
        </Ul>
    );
};