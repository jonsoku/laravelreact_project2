import React, { Component } from 'react'
import Header from '../Header';
import Axios from 'axios';
import {Link} from "react-router-dom";

export default class Notice extends Component {
    constructor(props){
        super(props);
        this.state = {
            notices : []
        }
    }

    renderNotices(){
        return this.state.notices.map(notice => (
            <div key={notice.id}>
                <div>
                    <table>
                        <thead>
                            <th>Notice</th>
                            <th width="100px">Title</th>
                            <th width="400px">Description</th>
                        </thead>
                        <tbody>
                            <td>{notice.id}</td>
                            <td><Link to={`/${notice.id}`}>{notice.title}</Link></td>
                            <td>{notice.description}</td>
                        </tbody>
                    </table>
                </div>
            </div>
        ))
    }

    getNotices(){
        Axios.get('/api/notices').then(response => this.setState({
            notices : [...response.data.notices]
        }));
    }

    componentWillMount(){
        this.getNotices();
    }

    render() {
        return (
        <>
            {this.renderNotices()}
        </>
        )
    }
}
