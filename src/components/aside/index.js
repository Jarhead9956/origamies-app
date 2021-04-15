import React, { Component } from 'react';
import Link from '../link';
import UserContext from '../../Context'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation';

//Using Context in class component
class Aside extends Component {

    static contextType = UserContext


    render() {
        const {
            loggedIn,
            user
        } = this.context

        const links = getNavigation(loggedIn, user)

        return (
            <aside className={styles.aside}>
                {
                    links.map(navElement => {
                        return(
                            <Link 
                                key={navElement.title} 
                                href ={navElement.link} 
                                title={navElement.title} 
                                type="aside"
                            />
                        )    
                    })
                }
            </aside>
        )
    }
    
};

export default Aside