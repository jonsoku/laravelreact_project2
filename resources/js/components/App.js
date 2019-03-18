import React, { Component } from 'react';

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
    }
    // [2] handle change
    handleChange(e){
        this.setState({
            //[5] log 로 확인한 것을 state에 넣는다.
            name: e.target.value
        })
        //[3] console.log(e.target.value);
    }



    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <form>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
