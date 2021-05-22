import React from "react"
import ReactDOM from "react-dom"
import Layout from './components/layout/layout'

const app = () => (
  <Layout/>
)


const render = () => {
  ReactDOM.render(
    app(),
    document.getElementById("root"),
  )
}

render()