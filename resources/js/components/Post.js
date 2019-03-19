import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            posts : []
        }
        this.renderPosts = this.renderPosts.bind(this);
    }

    createPost(){
        return (
            <div>
                <Link to={`/create`}>create</Link>
            </div>
        )
    }

    renderPosts(){
        return this.state.posts.map(post => (
            <div key = {post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </div>
        ))
    }

    getPosts(){
        Axios.get(`/posts`).then(response => this.setState({
            posts : [...response.data.posts]
        }));
    };

    componentWillMount(){
        this.getPosts();
    }

  render() {
    return (
      <div>
        <h1>Post입니다.</h1>
        {this.createPost()}
        {this.renderPosts()}
      </div>
    )
  }
}
export default Post;
