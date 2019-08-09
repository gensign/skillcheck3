import React, { Component } from 'react'

export default class Post extends Component {
    state = {
        title: '',
        image: '',
        content: '',
        author: '',
        authorPicture: ''
    }

    getPostInfo(){}
    
    render() {
        return (
            <div>
                Post
            </div>
        )
    }
}