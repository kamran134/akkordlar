const initialState = {
    items: null
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'POSTS:SET_ITEMS': return {
            ...state,
            items: payload
        }
        case 'POSTS:APPEND_ITEM': return {
            ...state,
            items: state.items ? [...state.items, payload] : [payload]
        }
        case 'POSTS:REMOVE_ITEM': return {
            ...state,
            items: state.items.filter(item => item._id !== payload)
        }
        case 'POST:ADD_ITEM': return {
            ...state,
            items: [...payload]
        }
        default: return state;
    }
}