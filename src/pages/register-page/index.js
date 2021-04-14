import React, { Component } from 'react'
import PageLayout from '../../components/page-layout'
import Title from '../../components/title'
import SubmitButton from '../../components/buttons/submit-button'
import Input from '../../components/input'
import styles from './index.module.css'
import UserContext from '../../Context'

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            registerError: false
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
            password,
            repeatPassword,
            registerError
        } = this.state

        if((password.length < 1) || (repeatPassword.length < 1) || (password !== repeatPassword)){
            this.setState({
                registerError: true
            })

            return
        }

        fetch('http://localhost:9999/api/user/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(promise => {
            const authToken = promise.headers.get('Autorization')
            if(authToken){
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
            password,
            repeatPassword,
            registerError
        } = this.state

        return(
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title='Register page' />
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
                    <Input 
                        type="password"
                        label='Re-password' 
                        value={ repeatPassword }
                        onChange={(e) => this.handleChange(e, 'repeatPassword')} 
                        id='re-password'>
                    </Input>
                    {registerError ? (<div>Password and Repeat passsword don't match!</div>) : null}
                    <SubmitButton type='submit' title='Register' />
                </form> 
            </PageLayout>
        )
    }
}

export default RegisterPage