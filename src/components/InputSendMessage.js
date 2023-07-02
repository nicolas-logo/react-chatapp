import { useState } from "react"
import { Form, InputGroup, Button } from "react-bootstrap"

const InputSendMessage = ({sendMessage}) => {
    const [message, setMessage] = useState();

    const send = (event) => {
        event.preventDefault();
        sendMessage({message});
        setMessage('');
    }

    return <Form onSubmit={send}>
        <InputGroup>
            <Form.Control 
                className="w-80"
                placeholder="Write a message...." 
                onChange={e => setMessage(e.target.value)}
                value={message}/>
            <Button type="submit" className="form-control" disabled={!message}>Send</Button>
        </InputGroup>
    </Form>
}

export default InputSendMessage;