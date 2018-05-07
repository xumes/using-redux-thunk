import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadUA } from './actions'

export class UserAgent extends Component {

    componentDidMount() {
        this.props.loadData()
    }
    render() {
        if (this.props.isFetching) {
            return <span>Loading User Agent Info ... </span>
        }
        if (this.props.error) {
            return <span>Error has occurred... </span>
        }
        return (
            <span> User Agent: {this.props.data['user-agent']} </span>
        )
    }
}

const masStateToPros = (state) => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadUA())
    }
}

export default connect(masStateToPros, mapDispatchToProps)(UserAgent)