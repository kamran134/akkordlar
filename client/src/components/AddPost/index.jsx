import React from 'react';

import './AddPost.scss';

const AddPost = () => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputTitle">Title of post</label>
                    <input type="text" class="form-control" id="exampleInputTitle" aria-describedby="emailHelp" placeholder="Enter title"/>
                    <small id="emailHelp" class="form-text text-muted">Enter the title of the post.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputText">Text of post</label>
                    <textarea type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Enter text"/>
                    <small id="emailHelp" class="form-text text-muted">Enter the text of the post.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputTitle">Image URL</label>
                    <input type="text" class="form-control" id="exampleInputTitle" aria-describedby="emailHelp" placeholder="Enter url"/>
                    <small id="emailHelp" class="form-text text-muted">Enter the url address of the post image.</small>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddPost;