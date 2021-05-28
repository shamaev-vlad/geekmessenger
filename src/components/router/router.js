/* eslint-disable no-undef */
import { ThemeProvider } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"
import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { Chat } from "../../pages/chat"
import { Profile } from "../profile/profile"

const theme = createMuiTheme({})

export class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <header>
            <ul>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>

              <li>
                <Link to="/chat">Чаты</Link>
              </li>

              <li>
                <Link to="/">Главная</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact={true} path="/" component={() => <h1>Главная</h1>} />
            <Route path="/profile" component={Profile} />
            <Route
              exact={true}
              path="/chat"
              component={(props) => <Chat {...props} />}
            />
            <Route path="*" component={() => <h1>404 Page not found</h1>} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}
