import React, { Component } from "react"
import { Header } from "../header"
import styles from "./profile-header.module.css"

export class Profile extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Header />
        <h1>Страница профиля</h1>
      </div>
    )
  }
}
