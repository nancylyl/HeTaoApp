import React, { Component } from 'react'
import styles from './discuss.module.scss'

export default class JionDiscuss extends Component {



    UNSAFE_componentWillMount() {
        console.log(this.props.location.state.data);
        // this.setState({
        //     details: this.props.location.state.data
        // })
    }
 
    render() {
        return (
            <div>
                111111111
            </div>
        )
    }
}
