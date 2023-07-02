import { useEffect, useRef } from "react";

const MessageContainer = ({ messages }) => {
    
    const container = useRef();

    useEffect(() => {
        if(container && container.current) {
            const {scrollHeight, clientHeight} = container.current;

            container.current.scrollTo({
                left: 0, top: scrollHeight - clientHeight,
                behavior: 'smooth'
            });
        }
    },[messages])

    return <div className="message-container" ref={container}>
        {
            messages.map((m, index) => 
                <div key={index} className="user-message">
                    <div className="message bg-primary">{m.message}</div>
                    <div className="from-user">{m.user}</div>
                </div>
            )
        
        }
    </div>
}

export default MessageContainer;