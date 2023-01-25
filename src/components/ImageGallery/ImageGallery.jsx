import { Component } from "react";

import ImageGalleryItem from "./ImageGalleryItem";
import { Ul } from "./imageGallery.styled";
import { fetchApi } from "./fetch-api";


export default class ImageGallery extends Component {
    state = {
        imgData:[],
        error: null,
        status: 'idle',
    }

    // componentDidMount() {
    //     const KEY = '31888671-f215a97b976f323f834fb73b1';

    //     fetch(`https://pixabay.com/api/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    //         .then(resp => resp.json())
    //         .then(({hits}) => this.setState({ imgData: hits }))
    //     ; 
    // }
    componentDidUpdate(pProps, pState) {
        const prevName = pProps.pictName;
        const nextName = this.props.pictName;

        if (prevName!==nextName) {
            fetchApi(nextName)
                .then(({ hits }) => this.setState({ imgData: hits, status: 'resolved' }))
                .catch(error => {
                    console.log(error);
                })
            ;
        }
    }

    render() {
        const { imgData,error,status } = this.state;
        
        if (status === 'idle') return 'Please input data what you want to find!';
        if (status === 'pending') return;
        if (status === 'rejected') return <div>{error.message}</div>;
        if (status === 'resolved') return (
            <Ul>
                <ImageGalleryItem imgData={imgData} />
            </Ul>
        );
    }
}