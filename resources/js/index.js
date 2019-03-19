import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import Post from './components/Post';
import PostShow from './components/PostShow';
import PostCreate from './components/PostCreate';
import TaskEdit from './components/TaskEdit';
import {HashRouter, Link, Switch, Route} from 'react-router-dom';
import PostEdit from './components/PostEdit';

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
    <HashRouter>
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
                {/* <Route exact path="/:id/edit" exact component={TaskEdit} />
                <App /> */}
                <Route exact path ="/posts/:id" exact component={PostShow}/>
                <Route exact path ="/:id/edit" exact component={PostEdit}/>
                <Route exact path ="/create" exact component={PostCreate}/>
                <Post />
                {/* <Route exact path="/about" exact component={About} />
                <Route exact path="/topics" exact component={Topic} /> */}
            </Switch>
        </div>
    </HashRouter>
    , document.getElementById('root'));
}
