import React from 'react';
import { Link } from 'react-router-dom';

import './FullPost.scss';

const FullPost = ({title, text, createdAt}) => {
    console.log(title, text, createdAt);
    return (
        <div>
            <Link to="/">
                <button type="button" className="btn btn-primary">Назад</button>
            </Link>
            <div className="post-item">
                <h2>{title}</h2>
                <p>
                    <i>{`Опубликовано ${createdAt}`}</i>
                </p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default FullPost;