import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core/'

import UserButtons from './UserButtons'
import logo from '../../assets/se-logo-white.png'
import whiteBackground from '../../assets/user-login-background.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#000000',
    margin: 0,
  },
  navbar: {
    backgroundColor: '#000000',
    overflow: 'hidden',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
  loginBackground: {
    width: '17em',
    height: '4.5em',
  },
}))
export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.navbar}
        style={{
          boxShadow: '0px 0px 0px 0px',
        }}
      >
        <Toolbar>
          <img src={logo} alt="logo" />

          <div className={classes.buttonSection}>
            <img
              src={whiteBackground}
              alt="login background"
              className={classes.loginBackground}
            />
            <div className={classes.userButtons}>
              <UserButtons text="Join" />
              <UserButtons text="Login" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
