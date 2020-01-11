import React from 'react';
import {Card} from 'react-bootstrap';


class PostGet extends React.Component{
    constructor(props){
        super(props)
        this.state = {posts: [], comments: []}
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method:'GET',
            headers: { 
                'Authorization': localStorage.getItem("Authorization"),
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Credentials':  true,
                'Access-Control-Allow-Origin':'http://localhost:3000/'
            },
            withCredentials: true,
            credentials: 'same-origin'
        })
        .then(response => response.json())
        .then(result =>{
            this.setState({posts: result})
        })
        .catch(error =>{
            console.log(error);
        });

        fetch('https://jsonplaceholder.typicode.com/comments', {
            method:'GET',
            headers: { 
                'Authorization': localStorage.getItem("Authorization"),
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Credentials':  true,
                'Access-Control-Allow-Origin':'http://localhost:3000/'
            },
            withCredentials: true,
            credentials: 'same-origin'
        })
        .then(response => response.json())
        .then(result =>{
            this.setState({comments: result})
        })
        .catch(error =>{
            console.log(error);
        });
    }

    
    render(){
        return(
            <div>
            <h1>Posts</h1>
            {
                this.state.posts.map(post =>
                    <div>
                        <Card key={post.id}>
                            <Card.Header>
                                Post #{post.id} {post.title}
                            </Card.Header>
                            <Card.Body>
                                {post.body}
                                <h3>Comments</h3>
                                {
                                    this.state.comments.map(comment => {
                                        return post.id === comment.postId ?
                                            <div key={comment.id}>
                                                <Card>
                                                    <Card.Body>
                                                        <b>Name:</b> {comment.name} <b>Email:</b> {comment.email}
                                                        <br/>
                                                        {comment.body}
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            :
                                            <p></p>
                                    })
                                }
                            </Card.Body>
                            <Card.Footer>
                                created by user #{post.userId}
                            </Card.Footer>
                        </Card>
                        <br/>
                    </div>
                )
            }
            </div>
        )
    }
}

export default PostGet;