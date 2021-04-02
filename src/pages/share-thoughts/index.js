import React, { Component }from 'react'
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import SubmitButton from '../../components/buttons/submit-button'
import Origami from '../../components/origami';
import styles from './index.module.css';


class ShareYourThoughts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origamies: []
        }
    }

    renderOrigamies() {
        const { origamies } = this.state;
        const lastTreeOrigamies = origamies.slice(origamies.length - 3)

        return lastTreeOrigamies.map(( origami, index ) => {
            return (
                <Origami key={origami._id} index={ index + 1 } {...origami} />
            )
        })
    }


    componentDidMount() {
        fetch('http://localhost:9999/api/origami')
        .then(responce => responce.json())
        .then((data) => {
            this.setState({
                origamies: data
            });
        })
        .catch((e) => console.log(e));

    }

    render() {
        return(
            <PageLayout>
                <Title title='Share your thoughts'/>
                <div className={styles.container}>
                    <div>
                        <textarea className={styles.textarea} placeholder='Publication...'></textarea>    
                    </div>
                <div>
                    <SubmitButton title='Post'/>
                </div>
                </div>
                <div>
                    {this.renderOrigamies()}
                </div>      
            </PageLayout>
            
        )
    } 
}

export default ShareYourThoughts