import React, { Component } from 'react'
import axios from 'axios'
import { setUser } from '../../ducks/reducer'
import { connect } from 'react-redux'
// issue connecting to store to utualize the reducer

class Auth extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    login = () => {
        console.log(this.state)
        const { username, password } = this.state
        console.log(username)
        // currently only sending the catch err. 
        axios.post('/api/auth/login', { username, password })
            .then(res => {
                this.props.setUser({ username, password })
                this.props.history.push('/dashboard')
            }).catch(err => {
                alert('Username and/or Password does not exist. Try again')
            })
        console.log(username)
    }

    register = () => {
        console.log(this.state)
        const { username, password, } = this.state
        console.log(username, password)
        // only sending the catch. does not currently register new user. 
        axios.post('/api/auth/register', { username, password })
            .then(res => {
                console.log(username)
                this.props.setUser({ username, password })
                console.log(username)
                this.props.history.push('/dashboard')
            }).catch(err => {
                alert('Username and/or Password in use')
            })
    }

    render() {
        return (
            <div>
                <span><input onChange={e => this.handleChange(e, 'username')} type='text' placeholder='Username' /></span>
                <span><input onChange={e => this.handleChange(e, 'password')} type='password' placeholder='Pasword' /></span>
                <button onClick={this.login}>Log In</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}
export default connect(null, { setUser })(Auth)