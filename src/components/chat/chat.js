/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-default-export */ 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React from "react"

export class Chat extends React.Component {
  // @TODO сделать propTypes
  render() {
    const { title, handleListItemClick, selected } = this.props

    

    return <div>
        <List component="nav">
        <ListItem 
         button={true}
         >
            {title}
        </ListItem>
      </List>
       </div>
  }
}