import React, { Component } from 'react'
import Axios from 'axios';

class PostCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            description : ''
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(e){
        this.setState({
            title : e.target.value
        })
    }
    handleChange2(e){
        this.setState({
            description : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        Axios.post('/posts', {
            title : this.state.title,
            description : this.state.description
        }).then(
            this.props.history.push('/')
        )
    }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <div>
                <input
                type="text"
                onChange={this.handleChange1}
                value={this.state.title}
                placeholder="title"
                />
            </div>
            <div>
                <textarea
                    onChange={this.handleChange2}
                    value={this.state.description}
                    rows="5"
                    placeholder="description"
                >
                </textarea>
            </div>
            <button type="submit">작성</button>
          </form>
      </div>
    )
  }
}
export default PostCreate;
