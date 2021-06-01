/* eslint-disable no-undef */
import { ThemeProvider } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"
import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Chat } from "../../pages/chat"
import { ChatList } from "../chat-list"
import { Header } from "../header"
import { Layout } from "../layout/layout"
import { MessageList, MessagesNotFound } from "../message-list"
import { MessageProvider } from "../message-provider"
import { Profile } from "../profile/profile"

const theme = createMuiTheme({})

export class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route
              exact={true}
              path="/chat"
              component={(props) => <Chat {...props} />}
            />
            <Route path={["/chat/:roomId", "/chat"]}>
              {(params) => (
                <MessageProvider {...params}>
                  {([state, actions]) => {
                    return (
                      <Layout
                        header={<Header />}
                        chats={<ChatList {...params} {...state} />}
                      >
                        <Route path="/chat/:roomId">
                          <MessageList {...state} {...actions} />
                        </Route>
                        <Route exact={true} path="/chat">
                          <MessagesNotFound />
                        </Route>
                      </Layout>
                    )
                  }}
                </MessageProvider>
              )}
            </Route>
            <Route
              exact={true}
              path="/*"
              component={() => <h1>такого чата нет</h1>}
            />
            <Route path="*" component={() => <h1>404 Page not found</h1>} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}
