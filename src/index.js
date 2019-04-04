import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './react-logo.png';
import Poster from './components/Poster';

const post = {
    image: `${logo}`,
    title: "React",
    text : "The best thing since jQuery, probably"
};

ReactDOM.render(<Poster post={post} />, document.getElementById('root'));
