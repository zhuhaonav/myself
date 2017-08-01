import React from 'react';
import Remarkable from './../lib/remarkable.js';

class CommentList extends React.Component{
    render (){
        let commentNodes = this.props.data.map(comment => {
            return (
                <Comment author = {comment.author} key = {comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return(
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
};
//表单
class CommentForm extends React.Component{
    handleAuthor (e) {
        this.setState({
            author: e.target.value
        })
    }
    handleText (e) {
        console.log(e.target.value);
        this.setState({
            text: e.target.value
        })
    }
    handleSubmit (e) {
        e.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        if(!text||!author){
            return;
        }
        this.props.onCommentSubmit({author:author,text:text});
        this.setState({author: '',text: ''});
    }
    constructor () {
        super();
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {author:'',text:''}
    }
    render (){
        return(
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="Your name"
                       value={this.state.author}
                       onChange={this.handleAuthor}
                />
                <input type="text"
                       placeholder="Say something..."
                       value={this.state.text}
                       onChange={this.handleText}
                />
                <input type="submit" value="Post" />
            </form>
        )
    }
}
//评论
// const Comment = React.createClass({
//     rawMarkup(){
//         let md = new Remarkable();
//         let rawMarkup = md.render(this.props.children.toString());
//         //console.log(this.props)
//         return {__html: rawMarkup};
//     },
//     render (){
//         return(
//             <div className="Comment">
//                 <h2 className="CommentAuthor">
//                     {this.props.author}
//                 </h2>
//                 <span dangerouslySetInnerHTML={this.rawMarkup()} />
//             </div>
//         )
//     }
// })
class Comment extends React.Component{
    rawMarkup(){
        let md = new Remarkable();
        let rawMarkup = md.render(this.props.children.toString());
        return {__html: rawMarkup};
    }
    render (){
        return(
            <div className="Comment">
                <h2 className="CommentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        )
    }
}
module.exports = {CommentList,CommentForm,Comment}