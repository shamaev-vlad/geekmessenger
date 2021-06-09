import { List } from "@material-ui/core"
import { push } from "connected-react-router"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getConversations } from "../../store"
import { ChatItem } from "./chat"
import Styles from "./chatList.module.css"

const ChatListView = ({
  match,
  conversations,
  messages,
  push,
  getConversations,
  conversationsPending,
}) => {
  const chatId = match?.params.id || ""

  const lastMessage = (chat) => {
    const message = messages[chat.title] || []
    return message[message.length - 1]
  }

  useEffect(() => {
    getConversations()
  }, [getConversations])

  return conversationsPending ? (
    <div>Loading...</div>
  ) : (
    <div className={Styles.chatList}>
      <div>
        <List component="nav">
          {conversations.map((chat) => (
            <ChatItem
              key={chat.title}
              title={chat.title}
              selected={chatId === chat.title}
              lastMessage={lastMessage(chat)}
              handleNavigate={() => push(`/chat/${chat.title}`)}
            />
          ))}
        </List>
      </div>
    </div>
  )
}

ChatListView.propTypes = {
  match: PropTypes.object.isRequired,
  conversations: PropTypes.array.isRequired,
  messages: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  getConversations: PropTypes.func,
  conversationsPending: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  conversations: state.conversationsReducer.conversations,
  conversationsPending: state.conversationsReducer.conversationsPending,
  messages: state.messagesReducer.messages,
})

const mapDispatchToProps = (dispatch) => ({
  push: (link) => dispatch(push(link)),
  getConversations: () => dispatch(getConversations()),
})

export const ChatList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatListView)
