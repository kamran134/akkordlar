import React from 'react';
import { Link } from 'react-router-dom';

import './PostItem.scss';

const PostItem = ({title, createdAt, _id, onRemove}) => {
    return (
        <div>
            <div className="post-item">
                <Link to={`/post/${_id}`}><h2>{title}</h2></Link>
                <p>
                  <i>{`Опубликовано ${createdAt}`}</i>
                  <Link to={`/post/${_id}/edit`}>Edit</Link>
                  <a href="javascript://" onClick={onRemove.bind(this, _id)}>Remove</a>
                </p>
            </div>
        </div>
    )
}

export default PostItem;