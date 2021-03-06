import React from 'react';
import image from '../../images/blue-origami-bird.png'
import styles from './index.module.css';

const Origami = ({ description, author, index }) => {
    return (
        <div className={styles.container}>
            <img className={styles[`origami-image`]} src={image} alt="Phost "/>
            <p className={styles.description}>
                <span>{index}- </span>
                {description}
            </p>
            <div>
                <span className={styles.user}>
                    <small>Author:</small>
                    {author.username}    
                </span>
            </div>   
        </div>
    )
}

export default Origami