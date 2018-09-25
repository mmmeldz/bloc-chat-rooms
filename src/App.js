import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';

var config = {
    apiKey: "AIzaSyBbg195daGMAv2xr1Nnxw1yppYOozT8j34",
    authDomain: "bloc-chat-e7c9e.firebaseapp.com",
    databaseURL: "https://bloc-chat-e7c9e.firebaseio.com",
    projectId: "bloc-chat-e7c9e",
    storageBucket: "bloc-chat-e7c9e.appspot.com",
    messagingSenderId: "208039023328"
  };
  firebase.initializeApp(config);

  class App extends Component {
    constructor(props){
      super(props);
      this.state ={activeRoom: ""};
      this.activeRoom = this.activeRoom.bind(this);
    }
    activeRoom(room) {
      this.setState({activeRoom: room})
    }

    render() {
      const showMessages = this.state.activeRoom;
      return (
        <div>
        <h1 className="selectRoom">{this.state.activeRoom.title || "Select A Room"}</h1>
               <RoomList firebase={firebase} activeRoom={this.activeRoom} />
               { showMessages ?
               (<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>)
               : (null)
               }        </div>
      );
    }
  }

  export default App;
