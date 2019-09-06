import React from 'react';
import { FullPost } from 'components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PostListActions from 'modules/PostList/actions';

class FullPostContainer extends React.Component {
    componentDidMount() {
        const { post, postId, fetchItem } = this.props
        if (!post) {
            fetchItem(postId);
        }
    }
    render() {
        const { post } = this.props;
        console.log(post);
        return (
            <FullPost {...post} createdAt={post && post.createdAt} />
        )
    }
}

const mapStateToProps = ({posts}, {match}) => ({
    post: posts.items && posts.items.filter(post => post._id === match.params.id)[0],
    postId: match.params.id
})

export default withRouter(connect(mapStateToProps, PostListActions)(FullPostContainer));