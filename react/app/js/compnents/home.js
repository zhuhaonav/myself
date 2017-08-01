import React from 'react';
import ReactDOM from 'react-dom';


class Home extends React.Component{
    constructor(){
        super();
        console.log('Home');
    }
    render(){
        return (
            <h5>这是home</h5>
        );
    }
}

class About extends React.Component{
    constructor(){
        super();
        console.log('About');
    }
    render(){
        return (
            <h5>这是About</h5>
        );
    }
}

module.exports = {Home,About};
