import React, { Component } from 'react'
import PageLayout from '../../components/page-layout'
import Title from '../../components/title'
import SubmitButton from '../../components/buttons/submit-button'
import Input from '../../components/input'
import styles from './index.module.css'

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            repeatPassword: ''
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
            password,
            repeatPassword
        } = this.state

        return(
            <PageLayout>
                <div className={styles.container}>
                    <Title title='Register page' />
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
                    <Input 
                        label='Re-password' 
                        value={ repeatPassword }
                        onChange={(e) => this.onChange(e, 'repeatPassword')} 
                        id='re-password'>
                    </Input>
                    <SubmitButton title='Register' />
                </div> 
            </PageLayout>
        )
    }
}

export default RegisterPage