import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {
    state = {
        title: '',
        image: '',
        content: '',
        author: '',
        authorPicture: ''
    }

    // getPosts(){
    //     axios.get('').then( res =>
    //     ).catch(err => alert('Unable to connect to Database'))
    // }

    
    render() {
        return (
            <div>
                Post
            </div>
        )
    }
}