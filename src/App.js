import React, { Component } from 'react'
import UserContext from './Context'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: null,
            user: null
        }
    }

    getCookie = (name) => {
        var cookieName = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return cookieName ? cookieName[2] : null;
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user
        })
    }

    logOut = () => {
        document.cookie = "x-auth-token=cookievalue; expires= Thu, 21 Aug 2014 20:00:00 UTC"
        this.setState({
            loggedIn: false,
            user: null
        })
    }

    componentDidMount() {
        const token = this.getCookie('x-auth-token')

        if(!token) {
            this.logOut()
            return
        }

        fetch('http://localhost:9999/api/user/verify', {
            method: 'POST',
            body: JSON.stringify({
                token
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(promise => {
            return promise.json()
        }).then(response => {
            if(response.status){
                this.logIn(response.user)
            }else{
                this.logOut()
            }
        })
    }

    render() {
        const {
            loggedIn,
            user
        } = this.state

        if(loggedIn === null) {
           return <div>Loading...</div>
        }
        return(
            <UserContext.Provider value={{
                loggedIn,
                user,
                logIn: this.logIn,
                logOut: this.logOut 
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default App