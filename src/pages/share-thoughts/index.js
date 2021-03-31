import React from 'react'
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import SubmitButton from '../../components/buttons/submit-button'
import styles from './index.module.css';


const ShareYourThoughts = () => {
    return (
        <PageLayout>
            <Title title='Share your thoughts'/>
            <div className={styles.container}>
                <div>
                    <textarea className={styles.textarea} defaultValue='Publication...'></textarea>    
                </div>
                <div>
                    <SubmitButton title='Post'/>
                </div>
            </div>
            
        </PageLayout>
      );
}

export default ShareYourThoughts