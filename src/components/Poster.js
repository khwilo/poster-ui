import React from 'react';

const Poster = ({ post }) => {
    const {image, title, text} = post;
    return (
        <div>
            <div>
                <img src={image} alt="react-logo"/>
            </div>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Poster;
