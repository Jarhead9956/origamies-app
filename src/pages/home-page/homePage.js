import React, { Component } from 'react';
import PageLayout from '../../components/page-layout'
import styles from './homePage.module.css';
import Origami from '../../components/origami';
import Title from '../../components/title';

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origamies: []
        };
    }

    renderOrigamies() {
        const { origamies } = this.state;
        
        return origamies.map(( origami, index ) => {
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

    render () {
        const { origamies } = this.state
        return (
          <PageLayout>
            <Title title='Publication' />
            {origamies ? 
            <div className={styles.posts}>
                {this.renderOrigamies()}
            </div>
            : (<div>No posts yet!</div>)
            }
          </PageLayout>
        )
    }
}

export default HomePage


    




