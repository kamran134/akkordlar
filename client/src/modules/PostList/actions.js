import { postsApi } from 'utils/api';

const PostListActions = {
    setItems: (items) => ({
        type: 'POSTS:SET_ITEMS',
        payload: items
    }),
    fetchItems: () => dispatch => {
        postsApi.get().then(({data}) => {
            dispatch(PostListActions.setItems(data));
        })
    },
    appendItem: (item) => ({
        type: 'POSTS:APPEND_ITEM',
        payload: item
    }),
    fetchItem: (id) => dispatch => {
        postsApi.get(id).then(({data}) => {
            dispatch(PostListActions.appendItem(data));
        })
    },
    removeItem: (id) => ({
        type: 'POSTS:REMOVE_ITEM',
        payload: id
    }),
    fetchRemoveItem: (id) => dispatch => {
        if (global.confirm('Are you sure?')) {
            dispatch(PostListActions.removeItem(id));
            postsApi.remove(id);
        }
    },
    addItem: (items) => ({
        type: 'POST:ADD_ITEM',
        payload: items
    }),
    fetchAddItem: (post) => dispatch => {
        if (global.confirm('Are you sure to add?')) {
            postsApi.postTest(post).then(() => postsApi.get()).then((posts) => {
                console.log('posts', posts);
                dispatch(PostListActions.addItem(posts.data))
            });
        }
    }
}

export default PostListActions;