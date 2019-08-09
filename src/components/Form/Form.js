import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        title: '',
        image: '',
        content: ''
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    submitNewPost() { }
    
    render() {
        return (
            <div>
                Form
            </div>
        )
    }
}