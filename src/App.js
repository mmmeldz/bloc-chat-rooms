import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';

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
    render() {
      return (
        <div>
          <RoomList firebase={firebase}/>
        </div>
      );
    }
  }

  export default App;
