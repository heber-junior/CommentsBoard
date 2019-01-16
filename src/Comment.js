import React, {Component} from 'react';

class Comment extends Component {
    render() {      
        return( 
            <div>Comentário: {this.props.comment.comentinho}</div>
        );
    }
}

export default Comment;