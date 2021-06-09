import PropTypes from "prop-types"
import React from "react"
import { Switch, Route } from "react-router-dom"
import { ChatList, MessageList, MessagesNotFound } from "../../components"

export const Chat = (props) => {
  return (
    <Switch>
      <Route path={["/chat/:id", "/chat"]}>
        <ChatList {...props} />

        <Route path="/chat/:id">
          <MessageList {...props} />
        </Route>

        <Route exact={true} path="/chat">
          <MessagesNotFound />
        </Route>
      </Route>

      <Route path="*" component={() => <h1>такого чата нет</h1>} />
    </Switch>
  )
}

Chat.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
}
