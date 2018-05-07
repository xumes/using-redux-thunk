import axios from 'axios'
export const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_REQUEST',
        error: false,
    }
}
export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data,
        error: false
    }
}
export const loadDataError = () => {
    return {
        type: 'LOAD_DATA_ERROR',
        error: true
    }
}
export const loadData = () => {
    return dispatch => {
        dispatch(loadDataRequest())
        axios
            .get('http://httpbin.org/ip')
            .then(({ data }) => dispatch(loadDataSuccess(data)))
            .catch(() => dispatch(loadDataError()))
    }
}

export const loadUARequest = () => {
    return {
        type: 'LOAD_UA_REQUEST',
        error: false,
    }
}
export const loadUASuccess = (data) => {
    return {
        type: 'LOAD_UA_SUCCESS',
        data,
        error: false
    }
}
export const loadUAError = () => {
    return {
        type: 'LOAD_UA_ERROR',
        error: true
    }
}
export const loadUA = () => {
    return dispatch => {
        dispatch(loadUARequest())
        axios
            .get('http://httpbin.org/user-agent')
            .then(({ data }) => dispatch(loadUASuccess(data)))
            .catch(() => dispatch(loadUAError()))
    }

}