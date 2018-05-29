import axios from 'axios'

export const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}

export const loadDataError = (err) => {
    return {
        type: 'LOAD_DATA_ERROR',
        err
    }
}

export const loadData = () => {
    return dispatch => {
        dispatch(loadDataRequest())
        axios
            .get('http://httpbin.org/ip')
            .then((response) => dispatch(loadDataSuccess(response.data)))
            .catch(err => dispatch(loadDataError(err)))
    }
}


export const loadUARequest = () => {
    return {
        type: 'LOAD_UA_REQUEST'
    }
}

export const loadUASuccess = (data) => {
    return {
        type: 'LOAD_UA_SUCCESS',
        data
    }
}

export const loadUAError = (err) => {
    return {
        type: 'LOAD_UA_ERROR',
        err
    }
}

export const loadUA = () => {
    return dispatch => {
        dispatch(loadUARequest())
        axios
            .get('http://httpbin.org/user-agent')
            .then((response) => dispatch(loadUASuccess(response.data)))
            .catch(err => dispatch(loadUAError(err)))
    }
}
