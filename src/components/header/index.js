import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import logo from '../../images/white-origami-bird.png';

const Header = () => {
    return (
        <header  className={styles.navigation}>
            <ul>
                <img className={styles.logo} src={logo} />
                <Link href='#' title='Going to 1' />
                <Link href='#' title='Going to 2' />
                <Link href='#' title='Going to 3' />
                <Link href='#' title='Going to 4' />
                <Link href='#' title='Going to 5' />
            </ul>
        </header>
    )
};

export default Header