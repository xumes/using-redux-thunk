import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadData } from './actions'

export class Info extends Component {

    componentDidMount() {
        this.props.loadData()
    }
    render() {
        if (this.props.isFetching) {
            return <span>Loading IP Info... </span>
        }
        if (this.props.error) {
            return <span>Error has occurred... </span>
        }
        return (
            <span> Info: {this.props.data.origin} </span>
        )
    }
}

const masStateToPros = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadData())
    }
}

export default connect(masStateToPros, mapDispatchToProps)(Info)