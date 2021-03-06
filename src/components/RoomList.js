import React, { Component } from 'react';
import roomList from '.././Styles/roomList.css';

 export class RoomList extends Component {
  constructor(props) {
    super(props);
     this.state = {
       title: "",
       rooms: [],
        };

this.roomsRef = this.props.firebase.database().ref('rooms');
this.handleChange = this.handleChange.bind(this);
this.createRoom = this.createRoom.bind(this);
}

handleChange(e) {
  this.setState({ title: e.target.value });
}

createRoom(e) {
  e.preventDefault();
  if (!this.state.title) { return }
  this.roomsRef.push({ title: this.state.title });
  this.setState({ title: "" });
}

componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
   }

   selectRoom(room) {
    this.props.activeRoom(room);
  }

   render() {
     const roomForm =(
       <form onSubmit={this.createRoom}>
       <input type="text" value={this.state.title} placeholder="Enter room name" onChange={this.handleChange} className="EnterRoom"/>
       <input type="submit" value="New Room" className="newRoom"/>
       </form>
     );

    const roomList = this.state.rooms.map((room) =>
 <li className="Lists" key={room.key} onClick={(e) => this.selectRoom(room, e)}>{room.title}</li>
);

    return(
      <div>
        <div>{roomForm}</div>
        <ul>{roomList}</ul>
      </div>
    );
  }
}
export default RoomList;
