import React, { Component } from 'react'
import PageLayout from '../../components/page-layout'
import Title from '../../components/title'
import SubmitButton from '../../components/buttons/submit-button'
import Input from '../../components/input'
import UserContext from '../../Context'
import styles from './index.module.css'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            loginError: false
        }
    }

    static contextType = UserContext

    handleChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const {
            username,
            password
        } = this.state

        fetch('http://localhost:9999/api/user/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(promise => {
            const authToken = promise.headers.get('Autorization')
            if(authToken) {
                document.cookie = `x-auth-token=${authToken}`
            }
            return promise.json()
        }).then(data => {

            if(data.username && document.cookie){
                this.context.logIn(data)
                this.props.history.push('/')
            }
        }).catch(e => {
            this.setState({
                loginError: true
            })
        })
    }

    render() {
        const {
            username,
            password
        } = this.state

        return(
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title='Login page' />
                    <Input 
                        label='Username' 
                        value={ username }
                        onChange={(e) => this.handleChange(e, 'username')} 
                        id='username'>
                    </Input>
                    <Input 
                        type="password"
                        label='Password' 
                        value={ password } 
                        onChange={(e) => this.handleChange(e, 'password')} 
                        id='password'>
                    </Input>
                    {this.state.loginError ? (<div>Wrong username or password</div>) : null}
                    <SubmitButton type="submit" title='Login' />
                </form> 
            </PageLayout>
        )
    }
}

export default LoginPage