/* eslint-disable no-undef */
/* eslint-disable import/no-default-export */
import { Input, InputAdornment, withStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import React from "react"
import Message from "../message/message"
import classes from "./message-field.module.css"

const StyledInput = withStyles(() => ({
  root: {
    "&": {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
    },
  },
}))(Input)

export default class MessageField extends React.Component {
  state = {
    messages: [{ author: "User", value: "Привет!", date: new Date() }],
    value: "",
  }

  componentDidUpdate(_, state) {
    const { messages } = this.state

    const lastMessage = messages[messages.length - 1]

    if (lastMessage.author === "User" && state.messages !== messages) {
      setTimeout(() => {
        this.setState({
          messages: [
            ...messages,
            { author: "Bot", value: "как дела?", date: new Date() },
          ],
        })
      }, 1500)
    }
  }

  sendMessage = ({ author, value }) => {
    const { messages } = this.state

    this.setState({
      messages: [...messages, { author, value, date: new Date() }],
      value: "",
    })
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      value: target.value,
    })
  }

  handlePressInput = ({ code }) => {
    const { value } = this.state

    if (code === "Enter") {
      this.sendMessage({ author: "User", value })
    }
  }

  render() {
    const { messages, value } = this.state

    return (
      <div>
      <div className={classes.messageField__container}>
        <div className={classes.fg1}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
        </div>
        </div>
        <StyledInput
          className={classes.styled__input}
          onChange={this.handleChangeInput}
          onKeyPress={this.handlePressInput}
          value={value}
          placeholder="Введите сообщение.."
          fullWidth={true}
          endAdornment={
            <InputAdornment position="end">
              {value && (
                <Send
                  className={classes.icon}
                  onClick={() => this.sendMessage({ author: "User", value })}
                />
              )}
            </InputAdornment>
          }
        />
      </div>
    )
  }
}
