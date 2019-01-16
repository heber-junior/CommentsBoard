import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';
import { database } from './firebase';

class App extends Component {
 
  state = {
    comments: [],
    isLoading: true    
  }

  sendComment = comment => {
    this.setState({comments: [...this.state.comments, comment]});
  }

  componentDidMount(){
    this.comments = database.ref('comments');
    this.comments.on('value', snapshot => { this.setState({ comments: snapshot.val()}) });
    this.state.isLoading = false;
  }

  render() {
    return (
      <div className="App">
        <NewComment sendComment={this.sendComment}/>
        {this.state.isLoading && <p>Carregando...</p>}
        <Comments comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
