import React, {useContext} from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import HomePage from './pages/home-page/homePage'
import ShareYourThoughts from './pages/share-thoughts'
import RegisterPage from './pages/register-page'
import LoginPage from './pages/login-page'
import ProfilePage from './pages/profile-page'
import UserContext from './Context'


const Navigation = () => {
    const {
        loggedIn,
        user
    } = useContext(UserContext)

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/share' component={loggedIn ? (ShareYourThoughts) : (LoginPage)} />
                <Route path='/register' component={!loggedIn ? (RegisterPage) : (HomePage)} />
                <Route path='/login' component={!loggedIn ? (LoginPage) : (HomePage)} />
                <Route  path='/profile/:userid' component={loggedIn ? (ProfilePage) : (LoginPage)} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation