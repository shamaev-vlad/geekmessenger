import { Button } from "@material-ui/core"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import styles from "./header.module.css"

export class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.header__right}>
          <Link className={styles.btn__link} to={"/chat"}>
            <Button variant="contained">Диалоги</Button>
          </Link>
          <Link className={styles.btn__link} to={"/profile"}>
            <Button variant="contained">Профиль</Button>
          </Link>
        </div>
      </div>
    )
  }
}
