import React, { Component } from 'react';
import Origami from '../origami';
import styles from './index.module.css';

class Origamies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origamies: []
        };
    }

    renderOrigamies() {
        const { origamies } = this.state;

        return origamies.map(( origami ) => {
            return (
                <Origami key={origami._id} {...origami} />
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
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Origamies</h1>
                <div className={styles.posts}>
                    {this.renderOrigamies()}
                </div>
            </div>
        )
    }
}

export default Origamies