import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import logo from '../../assets/se-logo-white.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#000000',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: '#000000',
  },
  buttonSection: {
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
  },
}))
export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <img src={logo} alt="logo" />

          <div className={classes.buttonSection}>
            <Button color="inherit">Join</Button>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
