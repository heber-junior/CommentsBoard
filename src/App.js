import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';

class App extends Component {
 
  state = {
    comments: []
  }

  sendComment = comment => {
    this.setState({comments: [...this.state.comments, comment]});
  }

  render() {
    return (
      <div className="App">
        <NewComment sendComment={this.sendComment}/>
        {JSON.stringify(this.state)}
        <Comments comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
