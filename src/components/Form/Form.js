import React, { Component } from 'react'
import axios from 'axios'

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

    // submitNewPost() {
    //     axios.post(`api/post/${user_id}`)
    //         .then().catch(err => {
    //             alert('Unable to to Post')
    //         })
    // }

    render() {
        return (
            <div>
                <h1>New Post</h1>
                <span>Title:
                    <input onChange={e => this.handleChange(e, 'title')} />
                </span>
                {/* <img src='' href='' /> */}
                <span>Image URL:
                    <input onChange={e => this.handleChange(e, 'image')} />
                </span>
                <span>Span:
                    <input onChange={e => this.handleChange(e, 'content')} />
                </span>
            </div>
        )
    }
}