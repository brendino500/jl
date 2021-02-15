import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  IconButton,
} from '@material-ui/core/'
import { GrMenu } from 'react-icons/gr'

import UserButtons from './UserButtons'
import logo from '../../assets/se-logo-white.png'
import whiteBackground from '../../assets/user-login-background.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#ffffff',
    margin: 0,
  },
  navbar: {
    backgroundColor: '#000000',
    overflow: 'hidden',
    height: '7vh',
  },
  buttonSection: {
    position: 'absolute',
    right: 0,
  },
  userButtons: {
    position: 'absolute',
    top: '-0.1em',
    right: '1em',
    [theme.breakpoints.between('sm', 'md')]: {
      width: 40,
    },
  },
  loginBackground: {
    width: '14em',
    height: '4em',
    marginTop: '-1em',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '10em',
    },
  },
  seLogo: {
    height: '2.2vh',
    width: 'auto',
    margin: '1em 0 0 1em',
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
}))
export default function Navbar() {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)
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

  const menuId = 'primary-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  )

  const mobileMenuId = 'primary-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p
          className={classes.button}
          onClick={() => {
            handleMobileMenuClose()
          }}
        >
          JOIN
        </p>
      </MenuItem>
      <MenuItem>
        <p
          className={classes.button}
          onClick={() => {
            handleMobileMenuClose()
          }}
        >
          LOGIN
        </p>
      </MenuItem>
    </Menu>
  )

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
          <div className={classes.sectionDesktop}>
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
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <GrMenu className={classes.burgerIcon} />
            </IconButton>
          </div>
        </Toolbar>
        {renderMobileMenu}
        {renderMenu}
      </AppBar>
    </div>
  )
}
