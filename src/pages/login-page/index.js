import React, { Component } from 'react'
import PageLayout from '../../components/page-layout'
import Title from '../../components/title'
import SubmitButton from '../../components/buttons/submit-button'
import Input from '../../components/input'
import styles from './index.module.css'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    render() {
        const {
            email,
            password
        } = this.state

        return(
            <PageLayout>
                <div className={styles.container}>
                    <Title title='Login page' />
                    <Input 
                        label='Email' 
                        value={ email }
                        onChange={(e) => this.onChange(e, 'email')} 
                        id='email'>
                    </Input>
                    <Input 
                        label='Password' 
                        value={ password } 
                        onChange={(e) => this.onChange(e, 'password')} 
                        id='password'>
                    </Input>
                    <SubmitButton title='Login' />
                </div> 
            </PageLayout>
        )
    }
}

export default LoginPage