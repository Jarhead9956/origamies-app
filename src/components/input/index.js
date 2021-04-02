import React from 'react'
import styles from './index.module.css'

const Input = ({ label, id, value, onChange }) => {
    return(
        <div className={styles.container}>
            <label htmlFor={id}>
                {label}:
                <input id={id} value={value} onChange={onChange}></input>
            </label>
        </div>
    )
}

export default Input