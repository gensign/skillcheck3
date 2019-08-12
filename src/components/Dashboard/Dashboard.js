import React, { Component } from 'react'
import axios from 'axios'

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

    searchPosts() {
        
    }

    // userOnlyPosts(){}

    // allPosts(){}

    render() {
        return (
            <div>
                <div>
                    <h1>Dashboard</h1>
                    <input onChange={e => this.handleChange(e, 'search')} placeholder="Search By Title" />
                    <button onClick={this.searchPosts}>Search</button>
                    <button>Reset</button>
                    <h4>CheckboxCommingSoon</h4>
                </div>
                <div>
                </div>
            </div>
        )
    }
}