import React from "react"
import { NavLink } from "react-router-dom"
import Styles from "./nav.module.css"

const links = [
  { to: "/chat", label: "Диалоги", exact: false },
  { to: "/profile", label: "Профиль", exact: false },
]

const renderLinks = () => {
  return links.map((link, index) => {
    return (
      <li key={index}>
        <NavLink to={link.to} exact={link.exact}>
          {link.label}
        </NavLink>
      </li>
    )
  })
}

export const Navigation = () => {
  return (
    <nav className={Styles.Nav}>
      <ul>{renderLinks()}</ul>
    </nav>
  )
}
