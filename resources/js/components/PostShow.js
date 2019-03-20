import React, { Component } from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom';

class PostShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            post : []
        }
        this.renderPost = this.renderPost.bind(this);
    }

    handleDelete(id){
        Axios.delete(`/posts/${id}`).then(
            this.props.history.push('/')
        )
    }

    renderPost(){
        return (
            <div>
                {this.state.post.id}
                {this.state.post.title}
                {this.state.post.description}
                <div>
                    <Link to={`/${this.state.post.id}/edit`}>Edit</Link>
                </div>
                <div>
                <button onClick={()=>this.handleDelete(this.state.post.id)}>Delete</button>
                </div>
            </div>
        )
    }

    getPost(){
        Axios.get(`/posts/${this.props.match.params.id}`).then(response => this.setState({
            post : response.data.post
        }));
    }

    componentWillMount(){
        this.getPost();
    }

  render() {
    return (
      <div>
          {this.renderPost()}
      </div>
    )
  }
}
export default PostShow;
