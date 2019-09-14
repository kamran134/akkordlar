import React from 'react';
import { connect } from 'react-redux';

import { PostsList } from 'components';
import PostsListAction from '../actions';

class PostsListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };
        this.postHandler = this.postHandler.bind(this);
        this.postSubmitHandler = this.postSubmitHandler.bind(this);
    }

    postHandler(event) {
        const { value } = event.target;
        event.target.name === 'title' ? this.setState({title: value})
            : event.target.name === 'text' ? this.setState({text: value}) : console.log('Empty');
    }

    postSubmitHandler(event) {
        const post = {
            title: this.state.title,
            text: this.state.text
        };

        this.props.fetchAddItem(post);
        event.preventDefault();
    }

    componentDidMount() {
        const { fetchItems } = this.props;
        fetchItems();
    }
    render() {
        const { fetchRemoveItem } = this.props;
        return (
            <div>
                <div className="new-post">
                    <form onSubmit={this.postSubmitHandler}>
                        <input name="title" type="title" placeholder="input title" onChange={this.postHandler}></input>
                        <input name="text" type="text" placeholder="input text" onChange={this.postHandler}></input>
                        <button type="submit">Post</button>
                    </form>
                    <div>Title: {this.state.title}</div>
                    <div>Text: {this.state.text}</div>
                </div>
                <PostsList items={this.props.items} onRemove={fetchRemoveItem} />
            </div>
        )
    }
}

export default connect(({posts}) => posts, PostsListAction)(PostsListContainer);