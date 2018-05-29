const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: null
}
const ip = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_DATA_REQUEST':
            return {
                isFetching: true,
                data: [],
                error: null
            }
        case 'LOAD_DATA_SUCCESS':
            return {
                isFetching: false,
                data: action.data,
                error: null
            }
        case 'LOAD_DATA_ERROR':
            return {
                isFetching: false,
                data: [],
                error: action.err
            }
        default:
            return state
    }
}

export default ip