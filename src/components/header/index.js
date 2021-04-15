import React, { Component } from 'react';
import Link from '../link';
import styles from './index.module.css';
import logo from '../../images/white-origami-bird.png';
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context'


//Using Context in class component
class Header extends Component {

    static contextType = UserContext

    render() {
        const {
            loggedIn,
            user
        } = this.context

        const links = getNavigation(loggedIn, user)
    
        return (
            <header  className={styles.navigation}>
                <ul>
                    <img className={styles.logo} src={logo} alt="Navigation logo"/>
                    {
                        links.map(navElement => {
                            return(
                                <Link 
                                    key={navElement.title} 
                                    href ={navElement.link} 
                                    title={navElement.title} type="header"
                                />
                            )   
                        })
                    }
                </ul>
            </header>
        )
    }    
};

export default Header