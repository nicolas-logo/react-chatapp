import { Card } from "react-bootstrap";

const UserPanel = ({users, room}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>People connected on room {room}:</Card.Title>
                <Card.Subtitle> ({users.length})</Card.Subtitle>
                {
                    users.map((user, index) =><Card.Text key={index}>-{user}</Card.Text>)
                }
            </Card.Body>
        </Card>
    )
}

export default UserPanel