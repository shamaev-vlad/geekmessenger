import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const messages = ['Привет!', 'Как поживаешь?'];

const handleClick = () => {
    messages.push('Отлично!');

    ReactDOM.render(
        <MessageField messages = { messages } />,
        document.getElementById('root'),
    );
}

const MessageComponent = (props) => <div>{ props.text }</div>;

const MessageField = ( props ) => {
    const messageElements = props.messages.map(message => <MessageComponent text = { message } />);

    return (
        <div>
            <h1>Чатик</h1>
            { messageElements }
            <button onClick = { handleClick } className="btn-send">"Отлично!"</button>
        </div>
    );
};

ReactDOM.render(
<MessageField messages = { messages } />,
 document.getElementById("root")
 );
