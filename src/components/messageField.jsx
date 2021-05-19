/* eslint-disable import/no-default-export */
import React from "react"
import Message from "./message"

export default class MessageField extends React.Component {
  state = {
    messages: [
      { author: "Федя", text: "Привет!" },
      { author: "Федя", text: "Как дела?" },
    ],
  }

  render() {
    const messageElements = this.state.messages.map((msg, index) => (
      <Message  key={index} author={msg.author} text={msg.text} />
    ))

    return (
      <React.Fragment>
        <div className="content">
            <h2>Чатик</h2>
          <div className="message-field">{messageElements}</div>
          <button onClick={this.handleClick}>Отправить сообщение</button>
        </div>
      </React.Fragment>
    )
  }

  handleClick = () => {
    this.setState({
      messages: [...this.state.messages, { author: "Петя", text: "Отлично" }],
    })
  }

  componentDidUpdate() {
    if (this.state.messages.length % 2 === 1) {
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              { author: "Робот", text: "Пользователь сейчас не в сети" },
            ],
          }),
        1500,
      )
    }
  }
}
