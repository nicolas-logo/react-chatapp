import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Lobby from './components/Lobby';
import Chat from './components/Chat';

const App = () => {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeRoom, setActiveRoom] = useState();

  const joinRoom = async (user, room) => {
    try {
      setActiveRoom(room);

      const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:32771/chat")
      .configureLogging(LogLevel.Information)
      .build();

      connection.on("ReceiveMessage", (user, message) => {
        setMessages(messages => [...messages, {user, message}])
      })

      connection.on("UsersUpdate", (users) => {debugger;
        setUsers(users);
      })

      connection.onclose(() => {
        setConnection();
        setMessages([]);
      })

      await connection.start();
      await connection.invoke("JoinRoom", { user, room });

      setConnection(connection);

    } catch (error) {
      
    }
  }

  const sendMessage = ({message}) => {
    connection.invoke("SendMessage", message);
  }

  const leaveRoom = async() => {
    try {
      //await connection.invoke("LeaveRoom");
      await connection.stop();
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div className='app'>
      <h2>Logo Chat Rooms</h2>
      {
        !connection || connection._connectionState !== 'Connected'
        ? <Lobby joinRoom={joinRoom} />
        : <Chat messages={messages} 
                sendMessage={sendMessage} 
                leaveRoom={leaveRoom} 
                users={users}
                room={activeRoom} />
      }
      
    </div>
  )
}

export default App;
