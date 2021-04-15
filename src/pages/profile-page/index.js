import React, {Component} from "react"
import PageLayout from '../../components/page-layout'
import Origami from '../../components/origami'
import UserContext from '../../Context'
import styles from './index.module.css'
import SubmitButton from '../../components/buttons/submit-button'

class ProfilePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myPosts: [],
            username: '',
            author: null
        }
    }

    static contextType = UserContext

    renderMyOrigamies() {
        const { myPosts } = this.state;

        return myPosts.map(( post, index) => {
            return (
                <Origami key={post._id} index={ index + 1 } author={this.state.author} description={post.description} />
            )
        })
    }

    logOut= () => {
        this.context.logOut()

        this.props.history.push('/')
    }


    componentDidMount() {
        const userId = this.props.match.params.userid
        fetch(`http://localhost:9999/api/user?id=${userId}`)
        .then(response => response.json())
        .then((data) => {
            data.map((user) => {
                if(user._id === userId){
                    this.setState({
                        myPosts: user.posts,
                        username: user.username,
                        author: user
                    })
                }
                
            })
        })
        .catch((e) => console.log(e))
    }

    render() {
        const {
            username,
            myPosts
        } = this.state

        return(
            <PageLayout>
                <div className={styles.container}>
                    <img className={styles.img} alt='Profile ' src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'></img>
                    <div className={styles['personal-info']}>
                        <p>
                            <span>Username: </span>
                            {username}
                        </p>
                        <p>
                            <span>Posts: </span>
                            {myPosts.length}
                        </p>
                    </div>
                    <button onClick={this.logOut}>Logout</button>
                </div>
                {this.renderMyOrigamies()}
            </PageLayout>
        )
    }
}

export default ProfilePage