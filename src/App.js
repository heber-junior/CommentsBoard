import React, { Component } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
import { database } from './firebase'

class App extends Component {
 
  state = {
    comments: [],
    isLoading: true    
  }

  sendComment = comment => {
    const id = database.ref().child('comment').push().key
    const comments = {}
    comments['comments/'+id] = { comment }

    database.ref().update(comments)
  }

  componentDidMount(){
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      if (snapshot.exists())
        this.setState({
          comments: snapshot.val(),
          isLoading: false
        }) 
    })
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

export default App
