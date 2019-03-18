import React, { Component } from 'react'
import Axios from 'axios'

class TaskEdit extends Component {
    // [1] constructor
    constructor(props){
        super(props);
        this.state={
            name: '',
            task: []
        }
        //[6] bind
        this.handleChange = this.handleChange.bind(this);
        //[9] bind
        this.handleSubmit = this.handleSubmit.bind(this);
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
        Axios.put(`/tasks/${this.props.match.params.id}`, {
            name:this.state.name
        }).then(response => {
            //console.log('from handle submit!', response)
            //[10]
            this.props.history.push('/');
        });
    }

    //[12][14] get all the tasks from backend
    getTasks(){
        Axios.get(`/tasks/${this.props.match.params.id}/edit`).then(response => this.setState({
            task : response.data.task,
            name: response.data.task.name
        }));
    }
    //[13] lifecycle method
    componentWillMount(){
        this.getTasks();
    }



    render() {
        console.log(this.props.match.params.id);
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Edit Task</div>

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
                                    <button type="submit" className="btn btn-primary">Edit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TaskEdit;
