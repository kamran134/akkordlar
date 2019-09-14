import React from 'react';
import { PostItem } from '../';

import './PostsList.scss';

const PostsList = ({items, onRemove}) => {
    console.log('itemsNotFunction', items);
    return (
        <div className="post-items">
            {items && items.length ? items.map((post, index) => (
                <PostItem key={index} {...post} onRemove={onRemove} />
            )) : 'Loading...'}
        </div>
    )
}

export default PostsList;