import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Router, Route, IndexRoute, hashHistory } from 'react-router';

import { Home , About } from './compnents/home';

import '../less/index.less';

class LinkDec extends React.Component{
    render(){
        return(
            <div>
                <Link to="/home" activeClassName="active">home</Link>
                <Link to="/about" activeClassName="active">about</Link>
                <Link to="/about/a" activeClassName="active">abouta</Link>
                <Link to="/about/b" activeClassName="active">aboutb</Link>
                {this.props.children}
                {this.props.params.name}
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={LinkDec}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/about/:name" component={About}/>
        </Route>
    </Router>,document.getElementById('app')
);