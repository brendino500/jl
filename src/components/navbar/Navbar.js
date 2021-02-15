import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core/'
import { BiMenu } from 'react-icons/bi'

import UserButtons from './UserButtons'
import logo from '../../assets/se-logo-white.png'
import whiteBackground from '../../assets/user-login-background.png'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 375,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  root: {
    flexGrow: 1,
    color: '#000000',
    margin: 0,
  },
  navbar: {
    backgroundColor: '#000000',
    overflow: 'hidden',
    height: 50,
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
    width: 200,
    zIndex: -1,
    position: 'fixed',
    right: 0,
    top: 0,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 100,
      height: 50,
    },
  },
  seLogo: {
    height: 18,
    width: 'auto',
    margin: '-1.5em 0 0 1em',
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 15,
    },
  },
  burgerMenu: {
    color: '#ffffff',
    margin: '-10px -10px',
  },
  buttonText: {
    color: '#000000',
    right: 0,
    top: -10,
  },
  menuText: {
    fontFamily: 'Sora',
    textTransform: 'uppercase',
    fontSize: '0.8em',
  },
}))

export default function Navbar() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (e) => {
    setMobileMoreAnchorEl(e.currentTarget)
  }

  const renderMobileMenu = (
    <Menu
      className={classes.dropMenu}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
      anchorEl={mobileMoreAnchorEl}
    >
      <MenuItem onClick={handleMenuClose} className={classes.buttonText}>
        <Button
          className={classes.menuText}
          href="https://square-enix-games.com/"
          target="_blank"
          rel="noreferrer"
        >
          Join
        </Button>
      </MenuItem>
      <MenuItem onClick={handleMenuClose} className={classes.buttonText}>
        <Button
          className={classes.menuText}
          href="https://square-enix-games.com/"
          target="_blank"
          rel="noreferrer"
        >
          Login
        </Button>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        className={classes.navbar}
        style={{
          boxShadow: '0px 0px 0px 0px',
        }}
      >
        <Toolbar>
          <img src={logo} alt="logo" className={classes.seLogo} edge="start" />

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <img
              src={whiteBackground}
              alt="login background"
              className={classes.loginBackground}
            />

            <UserButtons text="Join" />
            <UserButtons text="Login" />
          </div>

          <div className={classes.sectionMobile}>
            <IconButton onClick={handleMobileMenuOpen}>
              <BiMenu className={classes.burgerMenu} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  )
}
