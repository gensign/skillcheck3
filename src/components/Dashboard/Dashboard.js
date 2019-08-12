import React, { Component } from 'react'
import Posts from '../Post/Post'

export default class Dashboard extends Component {
    state = {
        posts: [],
        search: '',
        userposts: true
    }

    // componentDidMount(){}

    handleChange(e, key) {
        this.setState({
          [key]: e.target.value   
        })
    }

    // getAllPosts(){}

    // searchPosts(){}

    // userOnlyPosts(){}
    
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <input onChange={e => this.handleChange(e,'search')} placeholder="search" />
                <button onClick={this.searchPosts}>Search</button>
                <button>Reset</button>
                <h4>CheckboxCommingSoon</h4>
            </div>
        )
    }
}