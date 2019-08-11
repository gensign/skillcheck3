import React, { Component } from 'react'

export default class Dashboard extends Component {
    state = {
        posts: [],
        search: '',
        userposts: true
    }

    // componentDidMount(){}

    // getAllPosts(){}

    // searchPosts(){}

    // userOnlyPosts(){}
    
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <input placeholder="search" />
                <button>Search</button>
                <button>Reset</button>
                <h4>CheckboxCommingSoon</h4>
            </div>
        )
    }
}