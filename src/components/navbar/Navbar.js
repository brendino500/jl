import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core/'

import logo from '../../assets/se-logo-white.png'
import whiteBackground from '../../assets/user-login-background.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#000000',
    margin: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: '#000000',
    overflow: 'hidden',
  },
  buttonSection: {
    position: 'absolute',
    right: 0,
  },
  userButtons: {
    position: 'absolute',
    top: '1.2em',
    right: '2em',
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Sora',
    marginLeft: '1em',
  },
  loginBackground: {
    width: '17em',
    height: '4.5em',
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
            <img
              src={whiteBackground}
              alt="login background"
              className={classes.loginBackground}
            />
            <div className={classes.userButtons}>
              <Button color="inherit" className={classes.buttonText}>
                Join
              </Button>
              <Button color="inherit" className={classes.buttonText}>
                Login
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
