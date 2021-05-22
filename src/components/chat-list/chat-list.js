/* eslint-disable import/no-default-export */
import React from "react"
import { Chat } from '../chat/chat'

// @TODO сделать propTypes
export class ChatList extends React.Component {
  state = {
    chats: ["room1", "room2", "room3", "room4", "room5"],
    selectedIndex: 0,
  }

  render() {
    const { chats, selectedIndex } = this.state

    return (
        <div>
        {chats.map((chat, index) => (
          <Chat title={chat} key={index} selected={selectedIndex} />
        ))}
      </div>
    )
  }
}