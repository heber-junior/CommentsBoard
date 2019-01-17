import React, {Component} from 'react'

class NewComment extends Component {

    state = {
        newComment: ''
    }

    commentHandler = event => {
        this.setState({newComment: event.target.value});
    }

    sendComment = () => {
        this.props.sendComment(this.state.newComment)
        this.setState({newComment: ''})
    }

    render() {
        return (
            <div>
                <textarea onChange={this.commentHandler} value={this.state.newComment}></textarea>
                <button onClick={this.sendComment}>Enviar</button>
            </div>
        )
    }
}

export default NewComment