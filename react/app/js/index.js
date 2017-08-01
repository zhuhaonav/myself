import React from 'react';
import ReactDOM from 'react-dom';
import {CommentList,CommentForm} from'./render';
import './../less/index.less';

/*const CommentBox = React.createClass({
    getInitialState() {
        return {data: []};
    },
    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({data: data});
            },
            error: err => {
                console.error(err.toString());
            }
        });
    },
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
});*/
class CommentBox extends React.Component{
    loaderComments () {
        $.ajax({
            url: this.props.url+'/getJson',
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({data: data});
            },
            error: err => {
                console.error(err.toString());
            }
        });
    }
    handleCommentSubmit (comment) {
        let comments = this.state.data;
        comment.id = Date.now();
        let newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url+'/postForm',
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: data => {
                console.log(data);
                this.setState({data: data});
            },
            error: err => {
                console.error(err.toString());
            }
        });
    }
    constructor() {//初始化
        super();
        //this.loaderComments = this.loaderComments.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.state = {data: []};
    }
    componentDidMount() {
        this.loaderComments();
        //setInterval(this.loaderComments,this.props.pollInterval);
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit = {this.handleCommentSubmit}/>
            </div>
        );
    }
}
//插入DOM
ReactDOM.render(
    // <CommentBox data={data}/>,
    <CommentBox url='http://10.101.56.15:92'/>,
    document.getElementById('content')
);

/*var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is another comment"}
];
class Example extends React.Component{
    focus(){
        this.refs.myTextInput.focus();
    }
    constructor(){
        super();
        this.focus = this.focus.bind(this);
        this.state = {
            opacity : 1.0,
            color: 'red',
        }
    }
    componentWillMount(){
        setInterval(()=>{
            let opacity = this.state.opacity;
            opacity -= 0.05;
            if (opacity<0.5) {
                opacity=1.0;
            }
            this.setState({opacity:opacity});
        },100);
    }
    render(){
        let examp = data.map(examp => {
            return (
                <div key={examp.id}>
                    <p onClick={this.focus}> name:{this.props.name}</p>
                    <p>title:{this.props.title}</p>
                    <p>text:{examp.text}</p>
                </div>
            );
        });
        return(
            <div className="commentList">
                <input style={{opacity: this.state.opacity,color: this.state.color}} type="text" ref="myTextInput"/>
                {examp}
            </div>
        )
    }
}
Example.propTypes = {
    title: React.PropTypes.string.isRequired,
    //name: React.PropTypes.number.isRequired
};
Example.defaultProps = {
    title : '123'
};
ReactDOM.render(
    <Example name = 'hehe'/>,
    document.getElementById('contentbf')
);*/
