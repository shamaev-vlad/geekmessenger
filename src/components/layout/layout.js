/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-default-export */
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { ChatList } from '../chat-list/chat-list'
import MessageField from '../message-field/message-field'
import classes from './layout.module.css'

function Layout() {
  return (
    <div className={classes.Layout}>
      <AppBar  position="static">
        <Toolbar>
          <Typography variant="h6">Chat</Typography>
        </Toolbar>
      </AppBar>
    <div className={classes.flex}>
    
    <div className={classes.fg4}> <ChatList/> </div>
    <div className={classes.border} />
    <div className={classes.fg8} >
    <MessageField/>
    </div>
    </div>
    </div>
  )
}

export default Layout