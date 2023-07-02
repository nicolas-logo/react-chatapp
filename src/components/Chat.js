import InputSendMessage from "./InputSendMessage";
import MessageContainer from "./MessageContainer";
import UserPanel from "./UsersPanel";
import { Button } from "react-bootstrap";

 const Chat = ({ messages, sendMessage, leaveRoom, users, room }) => {
    return <div className="chat row">
        <div className="col-md-8">
            <MessageContainer messages={messages} />
            <InputSendMessage sendMessage={sendMessage} />
        </div>
        <div className="col-md-4">
            <Button className="btn btn-danger col-md-12 mb-2" onClick={leaveRoom}>Leave room</Button>
            <UserPanel users={users} room={room}></UserPanel>
            
        </div>
    </div>
 }

 export default Chat;