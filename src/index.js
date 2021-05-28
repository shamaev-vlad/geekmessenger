import "./global.css"
import { MuiThemeProvider } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./components/router/router"

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <Router />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
)
