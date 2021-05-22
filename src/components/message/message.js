/* eslint-disable import/no-default-export */
import PropTypes from "prop-types"
import React from "react"
import classes from './message.module.css'

export default class Message extends React.Component {
  static propTypes = {
    message: PropTypes.shape({
      author: PropTypes.string,
      value: PropTypes.string,
      date: PropTypes.date,
    }),
  }

  render() {
    const { message } = this.props
    const { author, value, date } = message

    return (
      <div className={classes.Message}>
        <h3 className={classes.author}>{author}</h3>
        <p className={classes.value}>{value}</p>
      </div>
    )
  }
}
