import React, { Component } from 'react'

export default class Auth extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange(){

    }

    login(){

    }

    register(){
        
    }

    render() {
        return (
            <div>
                <span><input placeholder='Username' /></span>
                <span><input placeholder='Pasword' /></span>
                <button>Log In</button>
                <button>Register</button>
            </div>
        )
    }
}