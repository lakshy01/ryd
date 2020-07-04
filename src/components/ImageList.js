import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';


const ImageList = (props) => {

    const renderList = props.images.map((image) => {
        console.log("renderList");
        return <ImageCard key={image.id} image={image} />
    })
    return (
        <div className="image-list">
            {renderList}
        </div>
    )
}

export default ImageList;