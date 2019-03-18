import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TaskEdit from './components/TaskEdit';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// )
// const About = () => (
//     <div>
//         <h2>About</h2>
//     </div>
// )
// const Topic = () => (
//     <div>
//         <h2>Topic</h2>
//     </div>
// )

if (document.getElementById('root')) {
    ReactDOM.render(
    <BrowserRouter>
        <div>
            {/* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topic</Link>
                </li>
            </ul> */}
            <Switch>
                <Route exact path="/:id/edit" exact component={TaskEdit} />
                <App />
                {/* <Route exact path="/about" exact component={About} />
                <Route exact path="/topics" exact component={Topic} /> */}
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
}
