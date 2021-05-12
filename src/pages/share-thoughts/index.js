import React, { Component, useContext, useEffect, useState }from 'react'
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import Origami from '../../components/origami';
import styles from './index.module.css';
import getCookie from '../../utils/cookie'

const ShareYourThoughts = (props) => {
    const [origamies, setOrigamies] = useState([])
    const [description, setDescription] = useState('')
    const [updatedOrigami, setUpdatedOrigami] = useState(false)

    const renderOrigamies = () => {
        const lastTreeOrigamies = origamies.slice(origamies.length - 3).sort((a,b) => b - a) 
        return lastTreeOrigamies.map(( origami, index ) => {
            return (
                <Origami key={origami._id} index={ index + 1 } {...origami} />
            )
        })
    }

    const submitThoughts = (props) => {
        const token = getCookie('x-auth-token')
        
        fetch('http://localhost:9999/api/origami', {
            method: 'POST',
            body: JSON.stringify({
                description,
                token
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(promise => {
            return promise.json()
        }).then(data => {
            if(updatedOrigami){
                setUpdatedOrigami(false)
            }else{
                setUpdatedOrigami(true)
                setDescription('')
            }
            
        })
    }

    useEffect(() => {
        fetch('http://localhost:9999/api/origami')
        .then(responce => responce.json())
        .then((data) => {
            setOrigamies(data)
        })
        .catch((e) => console.log(e));

    },[updatedOrigami])



    return(
        <PageLayout>
            <Title title='Share your thoughts'/>
            <div className={styles.container}>
                <div>
                    <textarea 
                        className={styles.textarea} 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder='Publication...'>
                    </textarea>    
                </div>
            <div>
                <button onClick={submitThoughts}>Post</button>
            </div>
            </div>
            <div>
                {renderOrigamies()}
            </div>      
        </PageLayout>
        
    )
}

export default ShareYourThoughts