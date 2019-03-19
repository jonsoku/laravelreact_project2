import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class App extends Component {
    // [1] constructor
    constructor(props){
        super(props);
        this.state={
            name: '',
            tasks: []
        }
        //[6] bind
        this.handleChange = this.handleChange.bind(this);
        //[9] bind
        this.handleSubmit = this.handleSubmit.bind(this);
        //[12] bind
        this.renderTasks = this.renderTasks.bind(this);
        //[16] bint
        this.handleDelete = this.handleDelete.bind(this);
    }
    // [2] handle change
    handleChange(e){
        this.setState({
            //[5] log 로 확인한 것을 state에 넣는다.
            name: e.target.value
        })
        //주석처리! [3]
        //console.log(e.target.value);
    }
    //[8] handle submit
    handleSubmit(e){
        e.preventDefault();
        Axios.post('/tasks', {
            name:this.state.name
        }).then(response => {
            //console.log('from handle submit!', response)
            //[10]
            this.setState({
                tasks: [response.data, ...this.state.tasks],
                name: ''
            })
        });
    }

    //[11] render tasks
    renderTasks(){
        return this.state.tasks.map(task => (
            <div key={task.id} className="media">
                <div className="media-body">
                    <div>
                        <p>{task.id}</p>
                        <p>{task.name}{''}</p>
                        <span className="text-muted">
                        <br />
                        by {task.user.name} | {task.updated_at.split(' ').slice(1).join(' ')}
                        </span>
                    </div>
                    <Link to={`/${task.id}/edit`} className="btn btn-sm btn-success float-right">Edit</Link>
                    <button onClick={()=>this.handleDelete(task.id)} className="btn btn-sm btn-warning float-right">DELETE</button>
                </div>
            </div>
        ));
    }
    //[12][14] get all the tasks from backend
    getTasks(){
        Axios.get('/tasks').then(response => this.setState({
            tasks : [...response.data.tasks]
        }));
    }
    //[13] lifecycle method
    componentWillMount(){
        this.getTasks();
    }

    //[15] handle DELETE
    handleDelete(id){
        // remove from local state
        const isNotId = task => task.id !== id;
        const updateTasks = this.state.tasks.filter(isNotId);
        this.setState({tasks: updateTasks})
        // make delete request to the backend
        Axios.delete(`/tasks/${id}`);
    }



    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                        //[4] console.log에 찍히는 것을 확인하기위해서 가즈아!
                                        onChange={this.handleChange}
                                        //[7] 받은 것을 value에 넣는다.
                                        value={this.state.name}
                                        className="form-control"
                                        rows="5"
                                        placeholder="create a new task"
                                        required/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">create</button>
                                </form>
                                <hr />
                                {this.renderTasks()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
