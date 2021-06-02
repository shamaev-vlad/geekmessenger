import PropTypes from "prop-types"
import React from "react"
import Styles from "./layout.module.css"

export const Main = (props) => {
  return (
    <>
      <header className={Styles.header}>{props.header}</header>
      <main className={Styles.main}>{props.children}</main>
    </>
  )
}

Main.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}
