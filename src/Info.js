import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadData } from './actions'

class Info extends Component {

    componentDidMount() {
        this.props.loadData()
    }

    render() {
        if(this.props.isFetching){
            return <span>Loading ... </span>
        }
        if(this.props.error){
            return <span>Error: {this.props.error.message}</span>
        }
        return (
            <p>Info:  {this.props.data.origin}</p>
        )
    }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Info)