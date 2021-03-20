import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import footerLogo from '../../images/blue-origami-bird-flipped.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles['footer-navigation']}>
                <Link href='#' title= 'Going to 1' type='footer' />
                <Link href='#' title= 'Going to 2' type='footer' />
                <Link href='#' title= 'Going to 3' type='footer' />
                <Link href='#' title= 'Going to 4' type='footer' />
                <Link href='#' title= 'Going to 5' type='footer' />
                <img className={styles.logo} src={footerLogo} alt='Footer logo' />          
            </ul>
            <p>Hristo Ilchev 2021</p>
        </footer>
        
    )
}

export default Footer