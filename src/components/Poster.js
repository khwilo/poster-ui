import React from 'react';

const Poster = ({ post }) => {
    const {image, title, text} = post;
    return (
        <div className="container">
            <div className="logoContainer">
                <img className="logo" src={image} alt="react-logo"/>
            </div>
            <div className="titleContainer">
                <p className="title">{title}</p>
            </div>
            <div className="textContainer">
                <p className="text">{text}</p>
            </div>
        </div>
    );
};

export default Poster;
