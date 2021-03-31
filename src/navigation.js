import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import HomePage from './pages/home-page/homePage'
import ShareYourThoughts from './pages/share-thoughts'


const Navigation = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/share' component={ShareYourThoughts} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation