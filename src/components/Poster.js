import React from 'react';

const Poster = ({ post }) => {
    const {image, title, text} = post;
    return (
        <div className="container">
            <img className="logo" src={image} alt="react-logo"/>
            <p className="title">{title}</p>
            <p className="text">{text}</p>
        </div>
    );
};

export default Poster;
