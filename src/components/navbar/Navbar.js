import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  MenuItem,
  Menu,
} from '@material-ui/core/'
import { BiMenu } from 'react-icons/bi'

import UserButtons from './UserButtons'
import logo from '../../assets/se-logo-white.png'
import whiteBackground from '../../assets/user-login-background.png'
import useStyles from '../../styles/navbarStyles/NavbarStyles'

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
