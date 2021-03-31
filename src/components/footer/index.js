import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import footerLogo from '../../images/blue-origami-bird-flipped.png';
import getNavigation from '../../utils/navigation';

const Footer = () => {
    const links = getNavigation()

    return (
        <footer className={styles.footer}>
            <ul className={styles['footer-navigation']}>
                {
                    links.map(navElement => {
                        return(
                            <Link 
                                key={navElement.title} 
                                href ={navElement.link} 
                                title={navElement.title} type="footer" 
                            />
                        )   
                    })
                }
                <img className={styles.logo} src={footerLogo} alt='Footer logo' />          
            </ul>
            <p>Hristo Ilchev 2021</p>
        </footer>
        
    )
}

export default Footer