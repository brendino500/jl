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
    height: '7vh',
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
    top: '0.5em',
    right: '1em',
  },
  loginBackground: {
    width: '14em',
    height: '3.8em',
  },
  seLogo: {
    height: '2.2vh',
    width: 'auto',
    margin: '-1.5em 0 0 1em',
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
          <img src={logo} alt="logo" className={classes.seLogo} />

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
