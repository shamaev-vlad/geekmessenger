import React from "react"
import { Route, Switch } from "react-router-dom"
import { Header } from "./components"
import { Layout as MainLayout } from "./components/layout"
import { Profile } from "./components/profile/profile"
import { Chat, Home } from "./pages"

export const App = () => {
  return (
    <MainLayout header={<Header />}>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path={["/chat/:id", "/chat"]} component={Chat} />
        <Route path="/" component={Home} />
        <Route path="*" component={() => <h1>404 Страница не найдена</h1>} />
      </Switch>
    </MainLayout>
  )
}
